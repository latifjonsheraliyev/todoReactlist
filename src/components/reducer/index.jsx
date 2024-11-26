import React, { useReducer } from "react";
import TodoReducer from "./todo";

const Reducer = () => {
  // const initialState = {
  //   counter: 1,
  // };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
    

      <TodoReducer />
    </div>
  );
};

export default Reducer;
