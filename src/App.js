import React, { useState } from "react";
import "./App.css";

// components
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const add = (text) => {
    if (text) {
      const list = [...todos];
      list.unshift(text);
      setTodos(list);
    }
  };

  const remove = (removeIndex) => {
    const updatedList = todos.filter((todo, index) => index !== removeIndex);
    setTodos(updatedList);
  };

  const update = (updateIndex, updatedTodo) => {
    const list = [...todos];
    list[updateIndex] = updatedTodo;
    setTodos(list);
  };

  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <AddTodo add={add} />
      <TodoList todos={todos} remove={remove} update={update} />
    </div>
  );
};

export default App;
