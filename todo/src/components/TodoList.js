import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
`;

const TodoList = props => {
  const markCompleted = (event, taskID) => {
    event.preventDefault();
  };

  return (
    <FlexContainer>
      {props.state.todos.map(item => (
        <Todo key={item.id} item={item} onClick={markCompleted} />
      ))}
    </FlexContainer>
  );
};

export default TodoList;
