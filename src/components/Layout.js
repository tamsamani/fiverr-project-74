import React from "react";
import { Row, Col } from "react-bootstrap";
import Menu from "./menu";

export default ({ children, className = "", ...props }) => (
	<Col className={"layout pt-4 pb-4 w-100 " + className} {...props}>
		<Row>
			<Menu />
			{children}
		</Row>
	</Col>
);
