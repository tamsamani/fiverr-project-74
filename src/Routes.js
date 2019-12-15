import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Table from "./components/table";
import Chart from "./components/chart";
import Layout from "./components/Layout";

export default ({ riskLevel, cones, children }) => (
	<Router>
		<Layout>
			<Route exact path="/" component={() => <Table riskLevel={riskLevel} cones={cones} />} />
			<Route path="/table" component={() => <Table riskLevel={riskLevel} cones={cones} />} />
			<Route path="/chart" component={() => <Chart riskLevel={riskLevel} cones={cones} />} />
		</Layout>
	</Router>
);
