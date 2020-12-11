import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, remove, update }) => {
  return (
    <div className="list-container">
      <h2>Todos List</h2>
      <div className="list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            item={{ todo, index }}
            remove={remove}
            update={update}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
