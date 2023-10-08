import React from "react";
import Card from "react-bootstrap/Card";
import "./Page.css";

function Project({ image, title, description, github, livelink }) {
  return (
    <Card className="project mb-4 card-border" style={{ maxWidth: "50%" }}>
      <div className="card-image-container">
        <Card.Img className="card_image" variant="top" src={image} />
      </div>
      <Card.Body className="card_body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={github} className="btn">
          GitHub
        </Card.Link>
        <Card.Link href={livelink} className="btn mx-4" variant="primary">
          Live Application
        </Card.Link>
      </Card.Body>
    </Card>
  );
}



export default Project;
