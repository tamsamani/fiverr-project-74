import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Menu from "./menu";
import RiskLevelSelector from "./risk-level-selector";
import Table from "./table";
import Chart from "./chart";

import Loader from "./components/Loader";

export default class App extends React.Component {
	state = {
		riskLevel: 10,
		loaded: false
	};

	cones = null;

	onChangeRiskLevel = riskLevel => this.setState({ riskLevel });

	onDataLoaded = () => this.setState({ loaded: true });

	componentDidMount() {
		axios
			.get(`/api/cones`)
			.then(res => {
				this.cones = res.data;
				this.onDataLoaded();
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const { riskLevel, loaded } = this.state;
		return !loaded ? (
			<Loader />
		) : (
			<Router>
				<div>
					<Menu />
					<RiskLevelSelector onChangeRiskLevel={this.onChangeRiskLevel} />
					<Route exact path="/" component={() => <Table riskLevel={riskLevel} cones={this.cones} />} />
					<Route path="/table" component={() => <Table riskLevel={riskLevel} cones={this.cones} />} />
					<Route path="/chart" component={() => <Chart riskLevel={riskLevel} cones={this.cones} />} />
				</div>
			</Router>
		);
	}
}
