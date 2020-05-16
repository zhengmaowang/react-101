import React, {useState} from "react";
import "./App.css";

// components
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const add = todo => {
    const list = [...todos]
    list.unshift(todo);
    
    setTodos(list);
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <AddTodo add={add} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
