import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useState } from "react";

export const MovieCard = ({ movie = {}, func }) => {
  console.log(movie);
  const { Poster } = movie;
  return (
    <Card style={{ width: "18rem", marginTop: "10px" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button onClick={() => func("happy")} variant="success">
            Happy
          </Button>
          <Button onClick={() => func("lazy")} variant="warning">
            Lazy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
