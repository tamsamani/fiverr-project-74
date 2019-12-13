import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Table from "./components/table";
import Chart from "./components/chart";

export default ({ riskLevel, cones, children }) => (
	<Router>
		<div>
			{children}
			<Route exact path="/" component={() => <Table riskLevel={riskLevel} cones={cones} />} />
			<Route path="/table" component={() => <Table riskLevel={riskLevel} cones={cones} />} />
			<Route path="/chart" component={() => <Chart riskLevel={riskLevel} cones={cones} />} />
		</div>
	</Router>
);
