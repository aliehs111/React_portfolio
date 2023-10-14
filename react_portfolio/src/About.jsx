import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./components/Page.css";


function About() {
  return (
    <Container fluid className="about-container">
      <Row>
        <Col>
        <img src="/assets/myImage.jpeg" alt="my photo" className="profile-photo" />
        </Col>
        <Col>Not sure what to go here</Col>
      </Row>
      <Row>
        <Col className="about-me">
          <h1>About Me</h1>
          <p>
            I am a full-stack web developer with a background in commercial
            construction project management. I am currently enrolled in the
            University of Richmond Coding Bootcamp, where I am learning the
            skills necessary to become a full-stack web developer. I am excited
            to apply my skills in a new career that will allow me to be
            creative and innovative. I am looking forward to the opportunity to
            work with a team of developers to create something amazing.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
