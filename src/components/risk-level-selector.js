import React, { useContext } from "react";
import PropTypes from "prop-types";

import storeContext from "../modules/store";
import { InputGroup, FormControl } from "react-bootstrap";

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
		<InputGroup className="mb-3">
			<InputGroup.Prepend>
				<InputGroup.Text id="risk-level">Risk Level</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl
				as="input"
				type="range"
				className="slider"
				onChange={onChangeRisk}
				max={maxRiskLevel}
				min={minRiskLevel}
				defaultValue={defultRisk}
				aria-describedby="risk-level"
			/>
			<InputGroup.Append>
				<InputGroup.Text>{state.riskLevel}</InputGroup.Text>
			</InputGroup.Append>
		</InputGroup>
	);
};

export default RiskLevelSelector;
