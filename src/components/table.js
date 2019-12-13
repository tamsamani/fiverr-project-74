import React, { useContext } from "react";
import PropTypes from "prop-types";
import { calculateTimeSeries } from "../modules/utils";

import storeContext from "../modules/store";

const Table = () => {
	const state = useContext(storeContext)[0];

	const { riskLevel, cones } = state;
	const cone = cones.filter(cone => cone.riskLevel == riskLevel)[0];
	const fee = 0.01;

	const timeSeries = calculateTimeSeries({
		mu: cone.mu,
		sigma: cone.sigma,
		years: 10,
		initialSum: 10000,
		monthlySum: 200,
		fee
	});

	// remove component unecessary usage
	const tableHeaders = ["month", "good", "median", "bad"];

	const months = timeSeries.median.map((v, idx) => idx);
	const dataGood = timeSeries.upper95.map(v => v.y);
	const dataMedian = timeSeries.median.map(v => v.y);
	const dataBad = timeSeries.lower05.map(v => v.y);

	const rows = months.map((entry, idx) => (
		<tr key={idx}>
			<td>{entry}</td>
			<td>{dataGood[idx]}</td>
			<td>{dataMedian[idx]}</td>
			<td>{dataBad[idx]}</td>
		</tr>
	));

	return (
		<table>
			<thead>
				<tr>
					{tableHeaders.map(key => (
						<th key={key}>{key}</th>
					))}
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

Table.defaultProps = {
	riskLevel: 10
};

Table.propTypes = {
	riskLevel: PropTypes.number
};

export default Table;

// class Table extends React.Component {
// 	render() {
// 		const { riskLevel, cones } = this.props;
// 		const cone = cones.filter(cone => cone.riskLevel == riskLevel)[0];
// 		const fee = 0.01;

// 		const timeSeries = calculateTimeSeries({
// 			mu: cone.mu,
// 			sigma: cone.sigma,
// 			years: 10,
// 			initialSum: 10000,
// 			monthlySum: 200,
// 			fee
// 		});

// 		// remove component unecessary usage
// 		const tableHeaders = ["month", "good", "median", "bad"];

// 		const months = timeSeries.median.map((v, idx) => idx);
// 		const dataGood = timeSeries.upper95.map(v => v.y);
// 		const dataMedian = timeSeries.median.map(v => v.y);
// 		const dataBad = timeSeries.lower05.map(v => v.y);

// 		const rows = months.map((entry, idx) => (
// 			<tr key={idx}>
// 				<td>{entry}</td>
// 				<td>{dataGood[idx]}</td>
// 				<td>{dataMedian[idx]}</td>
// 				<td>{dataBad[idx]}</td>
// 			</tr>
// 		));

// 		return (
// 			<table>
// 				<thead>
// 					<tr>
// 						{tableHeaders.map(key => (
// 							<th key={key}>{key}</th>
// 						))}
// 					</tr>
// 				</thead>
// 				<tbody>{rows}</tbody>
// 			</table>
// 		);
// 	}
// }
