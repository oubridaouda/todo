import db from "../utils/firebase";
import firebase from "firebase";

export const TodoItem = ({ todo, setTodoName, setTodoId }) => {
  const handleEdit = () => {
    setTodoName(todo.name);
    setTodoId(todo.id);
  };
  const handleDelete = async () => {
    try {
      await db.collection("todos").doc(todo.id).delete();
    } catch (e) {
      console.log(e.toString());
    }
  };

  const handleComplete = async () => {
    // setTodos(
    //   todos.map((item) => {
    //     if (item.id === todo.id) {
    //       return { ...item, completed: !item.completed };
    //     }
    //     return item;
    //   })
    // );
    if (!todo.completed) {
      try {
        await db.collection("todos").doc(todo.id).set(
          {
            completed: true,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (e) {
        console.log("Echec");
      }
    } else {
      try {
        await db.collection("todos").doc(todo.id).set(
          {
            completed: false,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (e) {
        console.log("Echec");
      }
    }
  };

  return (
    <div className="list-item" key={todo.id}>
      <li
        className="list-group-item d-flex justify-content-between my-2"
        id={"edit"}
      >
        {todo.completed ? (
          <h6
            className="mt-2 mb-0 align-middle"
            style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
            }}
          >
            {todo.name}
          </h6>
        ) : (
          <h6 className="mt-2 mb-0 align-middle">{todo.name}</h6>
        )}
        <div>
          <button className="btn btn-outline-success" onClick={handleComplete}>
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="btn btn-outline-primary" onClick={handleEdit}>
            <i className="fa fa-edit"></i>
          </button>
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
};
