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
  const markCompleted = (event, itemID) => {
    event.preventDefault();
    props.dispatch({ type: "MARK_COMPLETED", payload: itemID });
  };

  return (
    <FlexContainer>
      {props.state.map(item => (
        <Todo
          key={item.id}
          item={item}
          value={item.id}
          onClick={e => markCompleted(e, item.id)}
        />
      ))}
    </FlexContainer>
  );
};

export default TodoList;
