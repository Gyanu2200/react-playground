import "./App.css";
import { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Title from "./components/Title";
import { Form } from "./form/Form";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
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
  );
}

export default App;
