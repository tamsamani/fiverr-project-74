import React, { useContext } from "react";
import storeContext from "../modules/store";

export default () => {
	const [state, dispatch] = useContext(storeContext);

	const changeFee = event => {
		const fee = parseInt(event.target.value) / 100;
		dispatch({
			type: "CHANGE_FEE",
			payload: { fee }
		});
	};

	return (
		<div>
			<label>Fee Ratio (%)</label>
			<input type="number" onChange={changeFee} min={1} max={70} defaultValue={1} />
		</div>
	);
};
