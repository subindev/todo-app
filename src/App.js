// import './App.css';

import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);

  const onValueChange = (value)=>{
    setList([...list, value]);
  }

  return (
    <div>
      <TodoForm valueChange={onValueChange}/>
      <TodoList items={list}/>
    </div>
  );
}

export default App;
