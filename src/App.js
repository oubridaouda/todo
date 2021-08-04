import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import TodosList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoForm } from "./Components/Form";
import Login from "./Components/Login";
import LogOut from "./Components/LogOut";
import Signup from "./Components/Signup";

import firebase from "firebase";

const App = () => {
  const [todoId, setTodoId] = useState("");
  const [todoName, setTodoName] = useState("");
  const [todoUser, setTodoUser] = useState("");

  //Auth user

  return (
    <div className="App">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          {todoUser ? (
            <div>
              <LogOut setTodoUser={setTodoUser} />
              <div>
                <TodoForm
                  id={todoId}
                  name={todoName}
                  setTodoName={setTodoName}
                />
              </div>
              <TodosList setTodoName={setTodoName} setTodoId={setTodoId} />
            </div>
          ) : (
            <Login todoUserData={setTodoUser} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
