import React from "react";

const SearchForm = ({ search, setSearch }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search todo..."
      value={search}
      onChange={handleSearchChange}
    />
  );
};

export default SearchForm;
