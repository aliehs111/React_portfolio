import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./components/Page.css";
import CarouselAbout from "./components/CarouselAbout";
import AccordionAbout from "./components/AccordionAbout";
import myImage from "./assets/myImage.jpeg";

function About() {
  return (
    <Container className="about-container mt-0 pt-4  ">
      <Row>
        <Col className="photo-col">
          <img src={myImage} alt="my photo" className="profile-photo" />
        </Col>
        <Col md={8} className="carousel-col">
          <CarouselAbout style={{ width: "100%", height: "600px" }} />
        </Col>
      </Row>

      <Row>
        <Col className="about-me ">
          <h1 className="about-me-h1">About Me</h1>
          <p>
            Ok...so here's where I am supposed to say here that I am a fullstack
            web developer. Now don't get me wrong, I am that. I survived six
            months of the University of Richmond Coding Bootcamp for fullstack
            web development. But that doesn't make me the same as someone with
            years of experience. While I somehow managed to do really well in
            the class, there is still so much I want learn. My competitive
            nature kicks in when I'm working on some small detail or major
            function on an app and I am determined to meet any functionality the
            project requires. I have so much respect for the developer community
            and intend to be a part of it. I went all in and became very
            resourceful getting through this course, which is how I gained the
            wisdom to know how much more there is to know.{" "}
            <em>
              But there's no doubt in my mind that I am up for any challenge and
              I'm confident in my ability to figure it out!
            </em>
          </p>
          <AccordionAbout />
          <p>
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
