import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <h2 className={`TodoCounter TodoCounter--${loading && "loading"}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
