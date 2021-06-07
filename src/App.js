import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

import db from "./components/firebase";
import data from "bootstrap/js/src/dom/data";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            data: doc.data(),
          };
          setTodos([...todos, data]);
        });
      });
  }, []);

  todos.map((todo) => {
    console.log(todo);
  });
  return (
    <div className="App">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
