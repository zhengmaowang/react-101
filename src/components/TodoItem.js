import React, { useState } from "react";

const TodoItem = ({ item, remove, update }) => {
  const [edit, setEdit] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(item.todo);

  return (
    <li className="li">
      <button className="btn btn-remove" onClick={() => remove(item.index)}>
        <b>X</b>
      </button>
      {edit ? (
        <>
          <input
            className="input-update"
            placeholder="Update todo"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => {
              update(item.index, updatedTodo);
              setEdit(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <span className="todo-text" onClick={() => setEdit(true)}>
          {item.todo}
        </span>
      )}
    </li>
  );
};

export default TodoItem;
