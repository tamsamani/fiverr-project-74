import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { Provider } from "./modules/store";
import { storeReducer, initialState } from "./modules/reducer";

// store functionality
function AppIndex() {
	const useStore = useReducer(storeReducer, initialState);

	return (
		<Provider value={useStore}>
			<App />
		</Provider>
	);
}

ReactDOM.render(<AppIndex />, document.getElementById("root"));
