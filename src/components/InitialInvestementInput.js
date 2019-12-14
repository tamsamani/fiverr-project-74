import React, { useContext } from "react";
import storeContext from "../modules/store";

export default () => {
	const [state, dispatch] = useContext(storeContext);

	const changeInvestement = event => {
		const initialIvestement = parseInt(event.target.value);
		dispatch({
			type: "CHANGE_INITSUM",
			payload: { initialIvestement }
		});
	};

	return (
		<div>
			<label>initial Investement</label>
			<input type="number" onChange={changeInvestement} min={100} max={1e9} defaultValue={10000} />
		</div>
	);
};
