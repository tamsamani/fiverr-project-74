import React, { useContext } from "react";
import PropTypes from "prop-types";

import storeContext from "../modules/store";

const RiskLevelSelector = () => {
	const [state, dispatch] = useContext(storeContext);

	const { minRiskLevel, maxRiskLevel } = state;
	const defultRisk = 10;
	const options = [];

	const onChangeRisk = event => {
		const riskLevel = parseInt(event.target.value);
		dispatch({ type: "CHANGE_RISK_LEVEL", payload: { riskLevel } });
	};

	// Fix non-exist risk values.
	for (let k = minRiskLevel; k <= maxRiskLevel; k++) {
		options.push(
			<option key={k} value={k}>
				{k}
			</option>
		);
	}

	return (
		<div>
			Risk level:
			<select onChange={onChangeRisk} defaultValue={defultRisk}>
				{options}
			</select>
		</div>
	);
};

export default RiskLevelSelector;
