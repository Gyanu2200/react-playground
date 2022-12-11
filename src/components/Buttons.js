import "./Buttons.css";

const Buttons = ({ increment, decrement }) => {
  return (
    <div className="buttons">
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Buttons;
