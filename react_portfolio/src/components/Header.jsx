import React from 'react'
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header({updatePage}) {
  return (
    <Navbar collapseOnSelect expand="lg" bg='secondary'data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Sheila McGovern</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Navigation updatePage={updatePage}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;