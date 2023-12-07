import React from "react";
import "./components/Page.css";
import OffCanvasSkills from "./components/OffCanvasSkills";
import Card from 'react-bootstrap/Card';
import SmResume from "./assets/SheilaMcGovern_Resume";

const options = [
  {
    name: 'Backend Skills',
    items: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'GraphQL', 'Apollo', 'REST API', 'APIs', 'JSON', 'JWT', 'Bcrypt', 'ORM'],
  },
  {
    name: 'Frontend Skills',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Routing', 'Bulma', 'Responsive Design', 'jQuery', 'AJAX', 'Handlebars', ]
  },
];

function Resume() {
  return (
    <div className="text-center mx-auto py-5">
      <h1>My Resume</h1>
      <a href={SmResume} download="SheilaMcGovern_Resume" className="btn">Download Resume</a>

      <br />
      <br />
      <div className="d-flex justify-content-center align-items-center vh-60">
      <Card className="resume-card" >
      <Card.Body>While my resume reflects several years of experience as a project manager in commercial construction, I would rather be a web developer. I have worked very hard and learned so much with the University of Richmond Coding Bootcamp studying fullstack web development. I am excited to apply my skills to contribute and learn more with a great team in a new career. </Card.Body>
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

