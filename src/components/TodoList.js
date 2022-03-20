import React from "react";

export default function TodoList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
