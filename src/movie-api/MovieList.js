import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div className="m-2 p-3 bg-dark rounded">
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="success">Happy</Button>
            <Button variant="warning">Lazy</Button>
          </ButtonGroup>
          <div className="py-3">10 movies found</div>
        </Col>
      </Row>
      <Row>
        <Col className="py-2 d-flex justify-content-around flex-wrap">
          {movies.map((item) => (
            <MovieCard />
          ))}
        </Col>
      </Row>
    </div>
  );
};
