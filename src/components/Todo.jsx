import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { ListItemButton, ListItemText } from "@mui/material";

const Todo = ({ todo, toggleComplete }) => {
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    toggleComplete(todo.id);
  };

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: theme === "dark" ? "cyan" : "black",
        }}
      />
    </ListItemButton>
  );
};

export default Todo;
