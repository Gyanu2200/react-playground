import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { fetchData } from "../utilities/axiosHelpers";
import { MovieCard } from "./MovieCard";

export const SearchForm = ({ addMovieToList }) => {
  //passing the below searched data to useState, so that we can use it later in other function as required
  const [form, setForm] = useState("");
  //creating useState to display in child component <movieCard/>
  const [movie, setMovie] = useState({});
  //if movie not found, below will handle the error
  const [err, setErr] = useState(
    "No movie found, please try with different search 🌠"
  );

  //get the form data while typing
  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  // when form is submitted, call the api with the searched data, and get the movie details
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    err && setErr("");
    movie.imdbID && setMovie({});

    try {
      const resp = await fetchData(form);
      //   console.log(resp.data);
      if (resp.data.Response === "True") {
        setMovie(resp.data);
      } else {
        setErr(resp.data.Error);
      }
    } catch (error) {
      console.log(error);
      setErr("Error");
    }
  };
  const handleOnAddToList = (type) => {
    console.log(type);
    addMovieToList();
  };
  // display movie data in the UI
  return (
    <Form className="container" onSubmit={handleOnSubmit}>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control
            onChange={handleOnChange}
            placeholder="Movie Name.."
            required
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        {movie.imdbID && <MovieCard movie={movie} func={handleOnAddToList} />}
        {err && <Alert variant="danger">{err}</Alert>}
      </Row>
    </Form>
  );
};
