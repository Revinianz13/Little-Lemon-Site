import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import lemon from '../../images/lemon.svg';

import  './Nav.css';
function NavigBar() {

	return (
    <>
      <Navbar  className="navele" sticky="top" >
        <Container>
          <Navbar.Brand href="#home" ><img src={lemon} alt='A Lemon' /></Navbar.Brand>
          <Nav className="me-2" id=''>
            <Nav.Link href="#home" className='navlink'>Home</Nav.Link>
            <Nav.Link href="#about" className='navlink'>About</Nav.Link>
            <Nav.Link href="#menu" className='navlink'>Menu</Nav.Link>
            <Nav.Link href="#Book a table" className='navlink'>Book A table now!</Nav.Link>
            <Nav.Link href="#Order Online" className='navlink'>Order Online</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
	);
}

export default NavigBar;
