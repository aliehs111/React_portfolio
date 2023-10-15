// Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Page.css";

function Navigation() {
  return (
    <Nav>
      <NavLink to="/">About Me</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </Nav>
  );
}

export default Navigation;
