import React from "react";

import RiskLevelSelector from "./risk-level-selector";
import InitialInvestementInput from "./InitialInvestementInput";
import MonthlyInvestInput from "./MonthlyInvestInput";
import FeeInput from "./FeeInput";
import YearsSelector from "./YearsSelector";
import { Form } from "react-bootstrap";

export default props => (
	<Form className="mt-3">
		<RiskLevelSelector />
		<InitialInvestementInput />
		<MonthlyInvestInput />
		<YearsSelector />
		<FeeInput />
	</Form>
);
