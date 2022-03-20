import React from "react";

export default function TodoList({ items, removeTodo }) {
  return (
    <ul>
      {items.map((item) => (
        <li>
          {item} <button onClick={() => removeTodo(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
