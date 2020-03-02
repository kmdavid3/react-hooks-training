import React, { useState, useReducer, useEffect, useRef } from "react";
import "./styles.css";

const InitialState = {
  count: 0
};

const reducer = (state, action) => {
  if (!state) {
    return InitialState;
  }
  switch (action.type) {
    case "Increment":
      return Object.assign({}, { ...state }, { count: state.count + 1 });
    // return {...state, count: state.count +1};
    case "Reset":
      return InitialState;
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const latestCount = useRef(state.count);
  // const [count, incrementCount] = useState(0);
  const handleIncrement = () => {
    // incrementCount(count + 1);
    dispatch({ type: "Increment" });
  };
  const handleReset = () => {
    dispatch({ type: "Reset" });
  };

  const handleShowAlert = () => {
    setTimeout(() => {
      alert(`you clicked : ${state.count}`);
    }, 3000);
  };

  useEffect(() => {
    document.title = `You clicked ${state.count}`;
    latestCount.current = state.count;
    setTimeout(() => {
      console.log(`you clicked : ${state.count}`);
      console.log(`latest value: ${latestCount.current}`);
    }, 5000);
  });

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count : {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <button onClick={handleShowAlert}>Show alert</button>
      <br />
    </div>
  );
}
