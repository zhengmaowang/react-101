import React from "react";

const TodoItem = ({ item, remove }) => {
  return (
    <li className="li">
      <button className="btn btn-remove" onClick={e => remove(item.id)}><b>X</b></button>
      {" "}<span>{item.text}</span>
    </li>
  );
};

export default TodoItem;
