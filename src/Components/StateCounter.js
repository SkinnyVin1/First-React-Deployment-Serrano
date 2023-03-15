import "./StateCounter.css";
import { useState } from "react";

const StateCounter = () => {
  const [count, setCount] = useState(0);

  const increment = function () {
    setCount(count + 1);
  };
  const decrement = function () {
    setCount(count - 1);
  };
  const reset = function () {
    setCount(0);
  };

  return (
    <div>
      <h1> useState Counter</h1>
      <br />
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StateCounter;
