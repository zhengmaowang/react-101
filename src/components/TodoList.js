import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, remove }) => {
  return (
    <div className="list-container">
      <h2>Todos List</h2>
      <div className="list">
        {todos.map((item) => (
          <TodoItem item={item} remove={remove} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
