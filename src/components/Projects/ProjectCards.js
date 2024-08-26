import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description2}
        </Card.Text>
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
           
            {"Docs"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink1}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
           
            {"Live"}
          </Button>
        )}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink2}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
           
            {"Code"}
          </Button>
        )}
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
