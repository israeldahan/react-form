import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Article = (props) => {
    const {title, urlToImage, description, url, source} = props.data
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" href={url} target="_blank">News from <b>{source.name}</b></Button>
      </Card.Body>
    </Card>
  );
};

export default Article;
