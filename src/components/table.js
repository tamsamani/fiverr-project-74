import React, { useContext } from "react";
import PropTypes from "prop-types";
import BTable from "react-bootstrap/Table";
import { calculateTimeSeries } from "../modules/utils";

import storeContext from "../modules/store";

// I choose de-DE because it more clear in format Currency
const FormatCurrency = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format;

const Table = () => {
	const state = useContext(storeContext)[0];

	const { riskLevel, initialIvestement, fee, years, monthlySum, cones } = state;
	const cone = cones.filter(cone => cone.riskLevel == riskLevel)[0];

	const timeSeries = calculateTimeSeries({
		mu: cone.mu,
		sigma: cone.sigma,
		years,
		monthlySum,
		initialSum: initialIvestement,
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
			<td>{FormatCurrency(dataGood[idx])}</td>
			<td>{FormatCurrency(dataMedian[idx])}</td>
			<td>{FormatCurrency(dataBad[idx])}</td>
		</tr>
	));

	return (
		<BTable striped bordered hover size="sm">
			<thead>
				<tr>
					{tableHeaders.map(key => (
						<th key={key}>{key}</th>
					))}
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</BTable>
	);
};

Table.defaultProps = {
	riskLevel: 10
};

Table.propTypes = {
	riskLevel: PropTypes.number
};

export default Table;
