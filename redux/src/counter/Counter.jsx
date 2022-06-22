import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };
  const subtractCounter = () => {
    setCounterValue(counterValue - inputValue);
  };
  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h3
        data-testid="counter"
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
      >
        {counterValue}
      </h3>
      <button data-testid="subtract-btn" onClick={subtractCounter}>
        -
      </button>
      <input
        type="number"
        data-testid="input"
        value={inputValue}
        onChange={(e) => {
          return setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
};

export default Counter;
