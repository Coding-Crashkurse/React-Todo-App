import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Todo = ({ todo, toggleComplete }) => {
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    toggleComplete(todo.id);
  };

  const textColor = theme === "dark" ? "cyan" : "black";

  return (
    <li
      onClick={handleClick}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: textColor,
      }}
    >
      {todo.text}
    </li>
  );
};

export default Todo;
