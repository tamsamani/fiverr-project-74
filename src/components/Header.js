import React from "react";
import Menu from "./menu";
import RiskLevelSelector from "./risk-level-selector";
import InitialInvestementInput from "./InitialInvestementInput";

export default props => (
	<>
		<Menu />
		<div>
			<h3>Controls:</h3>
			<RiskLevelSelector />
			<InitialInvestementInput />
		</div>
		<hr />
	</>
);
