import { useState } from 'react'
import "./App.css";

// components
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  // create todo
  const add = (text) => {
    if (text) {
      const todo = { id: Math.random().toString(), text }
      const list = [...todos];

      list.unshift(todo);
      setTodos(list);
    }
  };

  // delete todo
  const remove = (removeId) => {
    const updatedList = todos.filter((todo) => todo.id !== removeId);
    setTodos(updatedList);
  };

  // update todo
  const update = (updateId, updatedText) => {
    const list = [...todos];

    list.forEach(todo => {
      if (todo.id === updateId)
        todo.text = updatedText
    })

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
