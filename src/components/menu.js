import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import Header from "./Header";

export default () => {
	const [toggle, setToggle] = useState(false);

	const setToggleFx = () => setToggle(!toggle);

	return (
		<div className="mb-2">
			<ButtonGroup>
				<Button as={Link} to="/table" variant="outline-primary">
					Table
				</Button>
				<Button as={Link} to="/chart" variant="outline-primary">
					Chart
				</Button>
			</ButtonGroup>
			<Button className="ml-3" variant={(toggle ? "" : "outline-") + "secondary"} onClick={setToggleFx}>
				options
			</Button>
			{toggle && <Header />}
		</div>
	);
};
