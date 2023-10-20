import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Page.css";

function Navigation() {
  return (
    <Nav>
      <NavLink className="nav-link" to="/">About Me</NavLink>
      <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
      <NavLink  className="nav-link"to="/resume">Resume</NavLink>
    </Nav>
  );
}

export default Navigation;
