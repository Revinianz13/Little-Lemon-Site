import React from 'react';
import OrderButton from '../Buttons/OrderButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Menu.css';
import cheeseCake from '../../images/CheeseCake.jpeg'
import ravioli from '../../images/ravioli.jpeg';
import salad from '../../images/salad.jpeg';

function MenuItems() {
	return (
		<>
			<Row xs={1} md={3} className='g-3' id="topele" style={{ justifyContent: 'center' }} >
      <Col key={1} className='d-flex justify-content-center'>
      <Card className='cardele' style={{ width: '15rem' }}>
					<Card.Img variant='top' src={salad} />
					<Card.Body>
						<Card.Title>Greek Salad</Card.Title>
						<Card.Text>
              Fresh with a lot of nutritions.
						</Card.Text>
            <Card.Text>
              Price:$ 9.99
						</Card.Text>
					</Card.Body>
          <Card.Footer>
          <OrderButton name={'Order Now'} />
          </Card.Footer>
				</Card>
      </Col>

      <Col key={2} className='d-flex justify-content-center'>
				<Card className='cardele' style={{ width: '15rem' }}>
					<Card.Img variant='top'  src={ravioli} />
					<Card.Body>
						<Card.Title>Beef Ravioli</Card.Title>
						<Card.Text>
              With A-5 Japanese Yagyu.
						</Card.Text>
            <Card.Text>
              Price: $ 20.99
						</Card.Text>
					</Card.Body>
          <Card.Footer>
          <OrderButton name={'Order Now'} />
          </Card.Footer>
				</Card>
      </Col>
      <Col key={3} className='d-flex justify-content-center'>
      <Card className='cardele' style={{ width: '15rem' }}>
					<Card.Img variant='top' src={cheeseCake} />
					<Card.Body>
						<Card.Title>Cheese Cake</Card.Title>
						<Card.Text>
              The Italian Cheese Cake 
						</Card.Text>
            <Card.Text>
              Price:$ 10.99
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
