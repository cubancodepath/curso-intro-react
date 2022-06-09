import React from "react";
import { useLocalStorage } from "./TodoLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveStorage,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  let searchedTodos = [];

  if (searchValue.length >= 1) {
    searchedTodos = todos.filter((todo) => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const onCompleted = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveStorage(newTodos);
  };

  const onDeleted = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveStorage(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        setSearchValue,
        onDeleted,
        onCompleted,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
