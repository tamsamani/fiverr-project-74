import React from "react";

import Menu from "./menu";
import RiskLevelSelector from "./risk-level-selector";
import InitialInvestementInput from "./InitialInvestementInput";
import MonthlyInvestInput from "./MonthlyInvestInput";
import FeeInput from "./FeeInput";
import YearsSelector from "./YearsSelector";

export default props => (
	<>
		<Menu />
		<div>
			<h3>Controls:</h3>
			<RiskLevelSelector />
			<InitialInvestementInput />
			<MonthlyInvestInput />
			<YearsSelector />
			<FeeInput />
		</div>
		<hr />
	</>
);
