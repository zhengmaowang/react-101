import React, {useState} from "react";
import "./App.css";

// components
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const add = text => {
    if (text) {
      const list = [...todos];
      const id = todos.length;

      list.unshift({ id, text });

      setTodos(list);
    }
  }

  const remove = id => {
    const updatedList = todos.filter(todo => todo.id !== id );
    setTodos(updatedList);
  }

  const update = (id, updatedTodo) => {
    const todoList = todos;

    todoList.forEach(todo => {
      if(todo.id === id)
        todo.text = updatedTodo;
    });

    setTodos(todoList);
  }

  return (
    <div className="app">
      <h1 className="title" >Todo App</h1>
      <AddTodo add={add} />
      <TodoList todos={todos} remove={remove} update={update} />
    </div>
  );
};

export default App;
