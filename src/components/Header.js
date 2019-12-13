import React from "react";
import Menu from "./menu";
import RiskLevelSelector from "./risk-level-selector";

export default props => (
	<>
		<Menu />
		<RiskLevelSelector onChangeRiskLevel={props.onChangeRiskLevel} />
	</>
);
