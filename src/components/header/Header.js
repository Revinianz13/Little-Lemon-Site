import React from 'react';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import restmin from '../../images/RestMid.jpg';
import delivery from '../../images/delivery.jpg';
import table from '../../images/table.jpg';
import './Head.css';
import ButtonEle from '../Buttons/ButtonEle'

function Header() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className='carou'>
			<Carousel.Item>
			<div className='image-wrapper'>
      <div className='image-container'>
        <Image src={table}/>
      </div>
    </div>
				<Carousel.Caption>
					<h3>Reservations</h3>
					<p>You can choose between many options.</p>
          <ButtonEle name={'Book a Table'} value={"Book"}/>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div className='image-wrapper'>
					<Image src={restmin} />
				</div>
				<Carousel.Caption>
					<h3>Enjoy our meals.</h3>
					<p>New updated menu.</p>
          <ButtonEle name={'Menu'} />
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div className='image-wrapper'>
					<Image src={delivery} />
				</div>
				<Carousel.Caption>
					<h3>Order Online.</h3>
					<p>You can order our special meals now!</p>
          <ButtonEle name={'Order Now'} />
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Header;
