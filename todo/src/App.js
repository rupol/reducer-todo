import React, { useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/reducer";

// components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
