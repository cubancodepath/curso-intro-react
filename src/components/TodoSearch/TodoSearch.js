import React from "react";
import "./TodoSearch.css";

function TodoSearch({ setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      onChange={onSearchValueChange}
      placeholder="Cebolla"
    />
  );
}

export { TodoSearch };
