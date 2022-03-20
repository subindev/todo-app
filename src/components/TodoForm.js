import React, { useState } from "react";

export default function TodoForm({ valueChange }) {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    valueChange(inputValue);
  };
  const onTodoValueChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onTodoValueChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
