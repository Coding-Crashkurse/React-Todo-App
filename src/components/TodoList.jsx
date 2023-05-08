import React from "react";
import Todo from "./Todo";
import { List } from "@mui/material";

const TodoList = ({ todos, toggleComplete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </List>
  );
};

export default TodoList;
