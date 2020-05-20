import React, {useState} from "react";
import "./App.css";

// components
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const add = todo => {
    if (todo) {
      const list = [...todos];
      const id = todos.length;

      list.unshift({ id, todo });

      setTodos(list);
    }
  }

  const remove = id => {
    const updatedList = todos.filter(todo => todo.id !== id );
    setTodos(updatedList);
  }

  return (
    <div className="app">
      <h1 className="title" >Todo App</h1>
      <AddTodo add={add} />
      <TodoList todos={todos} remove={remove} />
    </div>
  );
};

export default App;
