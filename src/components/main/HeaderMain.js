import React from "react";
import OrderButton from "../Buttons/OrderButton";
import './Main.css';
import { Container, Row, Col } from 'react-bootstrap';

function HeaderMain() {
	return (
		<div className='wrapper'>
			<Container>
				<Row>
					<Col md={4}>
						<h1>Specials</h1>
					</Col>
					<Col md={{ span: 4, offset: 4 }}>
						<OrderButton name={'Order Now'} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default HeaderMain;