import React from 'react';
import OrderButton from '../Buttons/OrderButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Menu.css';
import cheeseCake from '../../images/CheeseCake.png'
import ravioli from '../../images/ravioli.png';
import salad from '../../images/salad.png';

function MenuItems() {
	return (
		<>
			<Row xs={1} md={3} className='g-3' id="topele" >
      <Col key={1}>
      <Card className='cardele'>
					<Card.Img variant='top' src={salad} />
					<Card.Body>
						<Card.Title>Greek Salad</Card.Title>
						<Card.Text>
              Fresh with a lot of nutritions.
						</Card.Text>
            <Card.Text>
              Price:10.99
						</Card.Text>
					</Card.Body>
          <Card.Footer>
          <OrderButton name={'Order Now'} />
          </Card.Footer>
				</Card>
      </Col>

      <Col key={2}>
				<Card className='cardele'>
					<Card.Img variant='top' src={ravioli} />
					<Card.Body>
						<Card.Title>Beef Ravioli</Card.Title>
						<Card.Text>
              With A-5 Japanese Yagyu.
						</Card.Text>
            <Card.Text>
              Price:10.99
						</Card.Text>
					</Card.Body>
          <Card.Footer>
          <OrderButton name={'Order Now'} />
          </Card.Footer>
				</Card>
      </Col>
      <Col key={3}>
      <Card className='cardele'>
					<Card.Img variant='top' src={cheeseCake} />
					<Card.Body>
						<Card.Title>Cheese Cake</Card.Title>
						<Card.Text>
              The Italian Cheese Cake 
						</Card.Text>
            <Card.Text>
              Price:10.99
						</Card.Text>
					</Card.Body>
          <Card.Footer>
          <OrderButton name={'Order Now'} />
          </Card.Footer>
				</Card>
        </Col>
			</Row>
		</>
	);
}

export default MenuItems;
