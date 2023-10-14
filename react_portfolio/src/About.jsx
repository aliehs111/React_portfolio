import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./components/Page.css";
import "./components/CarouselAbout";
import CarouselAbout from "./components/CarouselAbout";
import AccordionAbout from "./components/AccordionAbout";



function About() {
  return (
    <Container fluid className="about-container">
      <Row>
        <Col>
        <img src="/assets/myImage.jpeg" alt="my photo" className="profile-photo" />
        </Col>
        <Col>
      
        <CarouselAbout/>
       
          <p className="carousel-ptag">This is the last 6 months of my life flashing before my eyes...learning full stack web development...bootcamp style.  Check out all these projects and more on my Portfolio page!</p>
     
        
        </Col>
      </Row>
      <Row>
        <Col className="about-me mx-auto ">
          <h1 className="about-me-h1">About Me</h1>
          <p>
           Ok...so here's where I am supposed to say here that I am a fullstack web developer.  However, I feel too humbled from what I have learned in University of Richmond Fullstack Coding Bootcamp to present myself as an expert.  While I somehow managed to do really well in the class, I still feel like there is so much I want learn.  I have so much respect for the developer community and I want to be a part of it.  It is because I put so much effort into this course that I know how much I don't know yet. But there's no doubt in my mind that I am up for any challenge and I'm confident in my ability to figure it out!
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
