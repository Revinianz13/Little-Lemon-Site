import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import lemon from '../../images/lemon.svg';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

import './Nav.css';

function NavigBar() {
  return (
    <>
      <Navbar className="navele">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ marginLeft: '0px' }}>
            <img src={lemon} alt="A Lemon" />
          </Navbar.Brand>
        </Container>
        <Container>
          <Nav className="custom-nav">
            <Nav.Link as={Link} to="/" className="navlink">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Reviews" className="navlink">
              Reviews
            </Nav.Link>
            <Nav.Link as={Link} to="/BookTable" className="navlink">
              Reservations
            </Nav.Link>
            <Nav.Link as={Link} to="/Menu" className="navlink">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="navlink">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigBar;





