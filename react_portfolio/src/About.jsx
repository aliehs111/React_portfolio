import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./components/Page.css";

function About() {
  return (
    <div className="page">
      <Container fluid>
        <Row>
          <Col>Image to go here</Col>
          <Col>Not sure what to go here</Col>
        </Row>
        <Row>
          <Col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ullam adipisci, nisi labore quisquam ipsa provident voluptatibus asperiores non tempore pariatur amet quo? Tempore dolorem sit, iure itaque repudiandae voluptas!</Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
