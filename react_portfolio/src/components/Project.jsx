import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Page.css";

function Project({image, title, description, github, livelink}) {
  // const imageSize = {
  //   width: "286px",
  //   height: "200px",
  // };
  return (
    <Card className="project mb-4 card-border"style={{maxWidth: "50%"}}>
      <div style={{}}>
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link href={github} className="btn">GitHub</Card.Link>
        <Card.Link href={livelink} className="btn mx-4"variant="primary">Live Application</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Project;
