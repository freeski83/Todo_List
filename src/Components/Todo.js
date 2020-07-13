import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem
      style={{
        display: "flex",
      }}
    >
      <Checkbox onClick={handleCheckboxClick} checked={todo.completed} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <button onClick={handleRemoveClick}>X</button>
    </ListItem>
  );
}

export default Todo;
