import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Page.css';


function navigation({updatePage}) {
  return (

    <Nav>
    <Nav.Link exact to="/" activeClassName="active" onClick={() => updatePage('')}>
        About Me
      </Nav.Link>
      <Nav.Link to="/portfolio" activeClassName="active" onClick={() => updatePage('portfolio')}>
        Portfolio
      </Nav.Link>
      <Nav.Link to="/contact" activeClassName="active" onClick={() => updatePage('contact')}>
        Contact
      </Nav.Link>
      <Nav.Link to="/resume" activeClassName="active" onClick={() => updatePage('resume')}>
        Resume
      </Nav.Link>
  </Nav>
  )
}


export default navigation