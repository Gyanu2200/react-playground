import "./App.css";
import { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Title from "./components/Title";
import { Form } from "./form/Form";
import { TitleMovie } from "./movie-api/TitleMovie";
import { Container } from "react-bootstrap";
import { SearchForm } from "./movie-api/SearchForm";
import { MovieList } from "./movie-api/MovieList";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  //below useState and function is for movie api
  const [movies, setMovies] = useState([]);

  const addMovieToList = (movieObj) => {
    setMovies([...movies, movieObj]);
  };
  console.log(movies);

  return (
    <div className="App">
      {/* this below div refers only number counter and form */}
      <div className="numForm">
        <Title />
        <br />
        <Display counter={counter} />
        <Buttons increment={increment} decrement={decrement} />
        {/* <br /> */}
        <hr />
        <section>
          <h2>Controlled inputfields</h2>
          <Form />
        </section>
      </div>
      <hr />
      <div className="wrapper">
        <Container>
          {/* below is part of Movie Api */}
          {/* Title */}
          <TitleMovie />

          {/* Form */}
          <SearchForm addMovieToList={addMovieToList} />
          {/* Movie List */}
          <MovieList />
        </Container>
      </div>
    </div>
  );
}

export default App;
