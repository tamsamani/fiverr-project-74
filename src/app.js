import React, { useContext } from "react";
import axios from "axios";

import Routes from "./Routes";
import Loader from "./components/Loader";

import storeContext from "./modules/store";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

function loadData(state, dispatch) {
	axios
		.get(`/api/cones`)
		.then(response => {
			const cones = response.data;
			dispatch({
				type: "LOAD_CONES",
				payload: { cones }
			});
		})
		.catch(error => {
			console.log(error);
			dispatch({
				type: "LOAD_ERROR",
				payload: { error }
			});
		});
}

function App(props) {
	const [state, dispatch] = useContext(storeContext);

	if (!state.loaded) {
		// loading data
		loadData(state, dispatch);
	}

	return (
		<Container>
			<Row className="justify-content-center align-items-center min-vh-100">
				{!state.loaded ? <Loader /> : <Routes />}
			</Row>
		</Container>
	);
}

export default App;
