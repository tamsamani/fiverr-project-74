import React, { useContext } from "react";
import storeContext from "../modules/store";
import { InputGroup, FormControl } from "react-bootstrap";

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
		<InputGroup className="mb-3">
			<InputGroup.Prepend>
				<InputGroup.Text id="month-sum">Monthly Investement</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl
				as="input"
				type="number"
				onChange={changeInvestement}
				min={50}
				max={1e6}
				defaultValue={200}
				placeholder="Monthly Investement"
				aria-label="MonthlySum"
				aria-describedby="month-sum"
			/>
			<InputGroup.Append>
				<InputGroup.Text>&euro;</InputGroup.Text>
			</InputGroup.Append>
		</InputGroup>
	);
};
