import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Page.css';


function navigation({updatePage}) {
  return (

    <Nav>
    <Nav.Link onClick={() => updatePage('')}>About Me</Nav.Link>
    <Nav.Link onClick={() => updatePage('portfolio')}>Portfolio</Nav.Link>
    <Nav.Link onClick={() => updatePage('contact')}>Contact</Nav.Link>
    <Nav.Link onClick={() => updatePage('resume')}>Resume</Nav.Link>
  </Nav>
  )
}


export default navigation