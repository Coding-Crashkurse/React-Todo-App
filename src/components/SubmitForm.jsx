import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const SubmitForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Add new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{ marginRight: 1 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SubmitForm;
