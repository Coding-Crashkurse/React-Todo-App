import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

const Todo = ({ todo, toggleComplete }) => {
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    toggleComplete(todo.id);
  };

  return (
    <motion.div
      animate={{
        x: todo.completed ? 200 : 0,
        color: todo.completed ? "darkred" : "green",
      }}
      transition={{ duration: 0.5 }}
    >
      <ListItem onClick={handleClick}>
        <ListItemText
          primary={todo.text}
          sx={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        />
      </ListItem>
    </motion.div>
  );
};

export default Todo;
