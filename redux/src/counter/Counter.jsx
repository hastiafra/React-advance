import { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1)
  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h3 data-testid="counter">{counterValue}</h3>
      <button data-testid="subtract-btn">-</button>
      <input type="number" data-testid="input" value={inputValue} />
      <button data-testid="add-btn">+</button>
    </div>
  );
};

export default Counter;
