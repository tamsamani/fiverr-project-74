import React, { useContext } from "react";
import storeContext from "../modules/store";

export default () => {
	const [state, dispatch] = useContext(storeContext);

	const changeInvestement = event => {
		const monthlySum = parseInt(event.target.value);
		dispatch({
			type: "CHANGE_MONTHSUM",
			payload: { monthlySum }
		});
	};

	return (
		<div>
			<label>Monthly Investement</label>
			<input type="number" onChange={changeInvestement} min={50} max={1e6} defaultValue={200} />
		</div>
	);
};
