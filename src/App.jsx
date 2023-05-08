import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import TodoList from "./components/TodoList";
import SubmitForm from "./components/SubmitForm";

import ThemeContext from "./contexts/ThemeContext";
import { Container, Box, Button, Typography } from "@mui/material";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const loadFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos");
    console.log(storedTodos);
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const saveToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    const loadedTodos = loadFromLocalStorage();
    setTodos(loadedTodos);
  }, []);

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: Date.now(), text, completed: false }];
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const openTodos = todos.filter((todo) => !todo.completed);

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: "center",
            padding: "1rem",
            borderRadius: "1rem",
            backgroundColor:
              theme === "dark"
                ? "rgba(30, 30, 30, 0.5)"
                : "rgba(50, 50, 50, 0.3)",
          }}
        >
          <Typography variant="h2">Todo App</Typography>
          <div>
            <p>Anzahl der Todos: {todos.length}</p>
            <p>Anzahl der offenen Todos: {openTodos.length}</p>
            <Button
              variant="contained"
              color="secondary"
              fullWidth="true"
              onClick={toggleTheme}
              sx={{ mt: 2, mb: 2 }}
            >
              Toggle theme
            </Button>
          </div>

          <SearchForm search={search} setSearch={setSearch} />
          <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
          <SubmitForm addTodo={addTodo} />
        </Box>
      </Container>
    </ThemeContext.Provider>
  );
};

export default App;
