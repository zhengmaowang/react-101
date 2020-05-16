import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <>
      <h2>Todos List</h2>
      <ul className="list">
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
