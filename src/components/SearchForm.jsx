import React from "react";
import { TextField } from "@mui/material";

const SearchForm = ({ search, setSearch }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <TextField
      variant="outlined"
      size="small"
      label="Search todo..."
      value={search}
      onChange={handleSearchChange}
    />
  );
};

export default SearchForm;
