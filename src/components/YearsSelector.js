import React, { useContext } from "react";

import storeContext from "../modules/store";
import { InputGroup, FormControl } from "react-bootstrap";

export default () => {
	const [state, dispatch] = useContext(storeContext);

	const defaultRisk = 10; // defaut 10 years

	const onChangeYear = event => {
		const years = parseInt(event.target.value);
		dispatch({ type: "CHANGE_YEARS", payload: { years } });
	};

	return (
		<InputGroup className="mb-3">
			<InputGroup.Prepend>
				<InputGroup.Text id="invest-years">Years</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl
				as="input"
				type="range"
				className="slider"
				onChange={onChangeYear}
				defaultValue={defaultRisk}
				min={1}
				max={25}
				aria-label="Years"
				aria-describedby="invest-years"
			/>
			<InputGroup.Append>
				<InputGroup.Text>{state.years}</InputGroup.Text>
			</InputGroup.Append>
		</InputGroup>
	);
};
