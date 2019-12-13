import React from "react";
import axios from "axios";

import Routes from "./Routes";
import Loader from "./components/Loader";
import Header from "./components/Header";

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
			<Routes riskLevel={riskLevel} cones={this.cones}>
				<Header onChangeRiskLevel={this.onChangeRiskLevel} />
			</Routes>
		);
	}
}
