import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { TodoItem } from "./TodoItem";

const TodosList = ({setTodoName,setTodoId}) => {
  const [todos, loading, error] = useCollectionData(
    db.collection("todos").orderBy("createdAt", "desc"),
    {
      idField: "id",
    }
  );

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    console.log(error);
    return;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} setTodoId={setTodoId} setTodoName={setTodoName} />
      ))}
    </div>
  );
};

export default TodosList;
