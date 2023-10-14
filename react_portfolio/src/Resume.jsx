import React from "react";
import Stack from "react-bootstrap/Stack";
import "./components/Page.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffCanvasSkills from "./components/OffCanvasSkills";
import Card from 'react-bootstrap/Card';

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
    <div className="text-center mx-auto my-5">
      <h1>My Resume</h1>
      <a href='SheilaMcGovern_CV.pdf' download="myname" className="btn" >Download Resume</a>
      <br />
      <br />
      <div className="d-flex justify-content-center align-items-center vh-60">
      <Card className="resume-card" >
      <Card.Body>While my resume reflects several years of experience as a project manager in commercial construction, I would rather be a web developer. I am currently enrolled in the University of Richmond Coding Bootcamp, where I am learning the skills necessary to become a full-stack web developer. I am excited to apply my skills in a new career that will allow me to be creative and innovative. I am looking forward to the opportunity to work with a team of developers to create something amazing.</Card.Body>
    </Card>
    </div>
      <br />
      <br />
      
      {/* Render Offcanvas menus */}
      {options.map((props, idx) => (
        <OffCanvasSkills key={idx} {...props} />
      ))}
    </div>
  );
}

export default Resume;

