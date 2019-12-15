import React, { useContext } from "react";
import storeContext from "../modules/store";
import { InputGroup, FormControl } from "react-bootstrap";

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
		<InputGroup className="mb-3">
			<InputGroup.Prepend>
				<InputGroup.Text id="fee-ratio">Fee Ratio</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl
				as="input"
				type="range"
				className="slider"
				onChange={changeFee}
				min={1}
				max={70}
				defaultValue={1}
				aria-label="Fee"
				aria-describedby="fee-ratio"
			/>
			<InputGroup.Append>
				<InputGroup.Text>{state.fee} %</InputGroup.Text>
			</InputGroup.Append>
		</InputGroup>
	);
};
