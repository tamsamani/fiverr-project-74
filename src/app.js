import React, { useContext } from "react";
import axios from "axios";

import Routes from "./Routes";
import Loader from "./components/Loader";
import Header from "./components/Header";

import storeContext from "./modules/store";

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

	return !state.loaded ? (
		<Loader />
	) : (
		<Routes>
			<Header />
		</Routes>
	);
}

export default App;
