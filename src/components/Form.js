import React, { useState } from "react";
import db from "../utils/firebase";
import firebase from "firebase";

import { Button } from "reactstrap";

export const TodoForm = ({ name, setTodoName, id }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const onInputChange = (event) => {
    setTodoName(event.target.value);
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (id && !isUpdated) {
      try {
        await db.collection("todos").doc(id).set(
          {
            name: name,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
        setTodoName("");
        setIsUpdated(true);
      } catch (e) {
        console.log("Echec de modification");
      }
    } else {
      try {
        await db.collection("todos").add({
          name: name,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTodoName("");
      } catch (e) {
        console.log("Echec d'ajout");
      }
    }
  };

  return (
    <>
      {/*<header>*/}
      {/*  <button>Sign Out</button>*/}
      {/*</header>*/}

      <form onSubmit={onFormSubmit} id="form">
        <div className="input-group">
          <div className="input-group-prepend"></div>

          <input
            type="text"
            className="form-control"
            placeholder="Enter a Todo..."
            value={name}
            required
            onChange={onInputChange}
          />
          <Button color="primary" id="but" type="submit">
            {id && !isUpdated ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </>
  );
};
