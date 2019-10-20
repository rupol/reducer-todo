import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import styled from "styled-components";

import { initialState, reducer } from "../reducers/reducer";

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
`;

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const markCompleted = (event, taskID) => {
    event.preventDefault();

    // this.setState({
    //   todo: this.state.todo.map(task => {
    //     if (task.id === taskID) {
    //       return {
    //         ...task, // merge existing task
    //         completed: !task.completed // set completed to opposite value
    //       };
    //     } else {
    //       return task;
    //     }
    //   })
    // });
  };

  return (
    <FlexContainer>
      {console.log(state)}
      {state.map(item => (
        <Todo key={item.id} item={item} onClick={markCompleted} />
      ))}
    </FlexContainer>
  );
};

export default TodoList;
