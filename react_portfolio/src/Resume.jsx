import React from "react";
import Stack from "react-bootstrap/Stack";
import "./components/Page.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffCanvasSkills from "./components/OffCanvasSkills";

const options = [
  {
    name: 'Backend Skills',
    items: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'GraphQL'],
  },
  {
    name: 'Frontend Skills',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Routing', 'Bulma'],
  },
];

function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <a href='portfolio.pdf' download="myname" className="btn" >Download Resume</a>
     
      <p>
        While my resume reflects several years of experience as a project manager in commercial construction, my true passion is in web development. I am currently enrolled in the University of Richmond Coding Bootcamp, where I am learning the skills necessary to become a full-stack web developer. I am excited to apply my skills in a new career that will allow me to be creative and innovative. I am looking forward to the opportunity to work with a team of developers to create something amazing.
      </p>

      {/* Render Offcanvas menus */}
      {options.map((props, idx) => (
        <OffCanvasSkills key={idx} {...props} />
      ))}
    </div>
  );
}

export default Resume;

