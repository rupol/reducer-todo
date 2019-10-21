import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 65%;
  height: 8rem;
  border: none;
  outline: none;
  padding: 0 2rem;
  font-size: 3rem;
  font-family: "Mansalva", cursive;
  background-color: #faac40;
  color: #000;
  &::placeholder {
    color: #4e4e4e;
  }
`;

const AddButton = styled.button`
  height: 8.2rem;
  width: 5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: none;
  background-color: #b5b5b5;
`;

const ClearButton = styled.button`
  height: 8.2rem;
  width: 7rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: none;
  background-color: #ce6d5d;
`;

const Icon = styled.i`
  margin: 15px 0 0;
`;

const ButtonLabel = styled.p`
  font-size: 1.5rem;
  font-family: "Mansalva", cursive;
  margin: 5px 0;
`;

const TodoForm = props => {
  const [newItem, setNewItem] = useState();

  const handleChange = event => {
    setNewItem(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: newItem });
  };

  const clearCompleted = event => {
    event.preventDefault();
  };

  return (
    <Form>
      <Input
        type="text"
        placeholder="Add a task..."
        value={newItem}
        onChange={handleChange}
      />
      <AddButton onClick={handleSubmit}>
        <Icon className="far fa-plus-square fa-lg"></Icon>
        <ButtonLabel>add</ButtonLabel>
      </AddButton>
      <ClearButton onClick={clearCompleted}>
        <Icon className="far fa-minus-square fa-lg"></Icon>
        <ButtonLabel>clear</ButtonLabel>
      </ClearButton>
    </Form>
  );
};

export default TodoForm;
