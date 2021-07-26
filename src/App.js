import React, {useState} from "react";

import "./App.css";
import Header from "./components/Header";
import TodosList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import {TodoForm} from "./components/Form";

const App = () => {
  const [todoId, setTodoId] = useState("");
  const [todoName, setTodoName] = useState("");

  return (
    <div className="App">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <TodoForm id={todoId} name={todoName} setTodoName={setTodoName}/>
        </div>
        <div>
          <TodosList setTodoName={setTodoName} setTodoId={setTodoId}  />
        </div>
      </div>
    </div>
  );
};

export default App;
