import { useReducer } from "react";

const countReduce = function (state, action) {
  switch (action.type) {
    case "increment":
      return { number: state.number + action.points };
    case "decrement":
      return { number: state.number - action.points };
    case "reset":
      return { number: 0 };
  }
};

const ReducerCounter = () => {
  const [count, dispatch] = useReducer(countReduce, { number: 0 });
  return (
    <div>
      <h1> useReducer Counter</h1>
      <br />
      <h3>Count: {count.number}</h3>
      <button onClick={() => dispatch({ type: "increment", points: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", points: 1 })}>
        Decrement
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increment", points: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", points: 5 })}>
        Decrement by 5
      </button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default ReducerCounter;
