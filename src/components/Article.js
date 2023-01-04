import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Article = (props) => {
    const {title, urlToImage, description, url, source} = props.data
  return (
    <Col sm={6} md={4} lg={3}>
    <Card >
      <Card.Img variant="top" src={urlToImage} />
      {/* <Image rounded={true} ref={urlToImage}/> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" href={url} target="_blank">News from <b>{source.name}</b></Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default Article;
