import React, { useContext } from "react";

import storeContext from "../modules/store";

export default () => {

	const [state, dispatch] = useContext(storeContext);

	const defultRisk = 10; // defaut 10 years

	const onChangeYear = event => {
		const years = parseInt(event.target.value);
		dispatch({ type: "CHANGE_YEARS", payload: { years } });
	};

	const options = [];

	// Fix non-exist risk values.
	for (let k = 1; k <= 15; k++) {
		options.push(
			<option key={k} value={k}>
				{k}
			</option>
		);
	}

	return (
		<div>
			Number of Years:
			<select onChange={onChangeYear} defaultValue={defultRisk}>
				{options}
			</select>
		</div>
	);
};
