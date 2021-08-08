import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import TodosList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoForm } from "./Components/Form";
import Login from "./Components/Login";

const App = () => {
  const [todoId, setTodoId] = useState("");
  const [todoName, setTodoName] = useState("");
  const [todoUser, setTodoUser] = useState("");

  //Auth user

  return (
    <div className="App">
      <div className="app-wrapper">
        <div>
          {todoUser ? (
            <div>
              <Header todoUserData={setTodoUser} />
              <div>
                <TodoForm
                  id={todoId}
                  name={todoName}
                  setTodoName={setTodoName}
                  todoUserData={setTodoUser}
                />
              </div>
              <TodosList setTodoName={setTodoName} setTodoId={setTodoId} />
            </div>
          ) : (
            <div className="login">
              <Login todoUserData={setTodoUser} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
