import React, { useContext } from "react";
import storeContext from "../modules/store";
import { InputGroup, FormControl } from "react-bootstrap";

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
		<InputGroup className="mb-3">
			<InputGroup.Prepend>
				<InputGroup.Text id="init-sum">Initial Investement</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl
				as="input"
				type="number"
				onChange={changeInvestement}
				min={100}
				max={1e9}
				defaultValue={10000}
				placeholder="Initial Investement"
				aria-label="initSum"
				aria-describedby="init-sum"
			/>
			<InputGroup.Append>
				<InputGroup.Text id="init-sum">&euro;</InputGroup.Text>
			</InputGroup.Append>
		</InputGroup>
	);
};
