// import './App.css';

import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);

  const onValueChange = (value)=>{
    setList([...list, value]);
  }

  const onRemoveTodoClick = (todo)=>{
    const index = list.indexOf(todo);
    list.splice(index, 1);
    setList([...list])
  }

  return (
    <div>
      <TodoForm valueChange={onValueChange}/>
      <TodoList items={list} removeTodo={onRemoveTodoClick}/>
    </div>
  );
}

export default App;
