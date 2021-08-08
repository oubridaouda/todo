import React from "react";
import firebase from "firebase";

const LogOut = ({ setTodoUser }) => {
  const handleLogout = () => {
    setTodoUser("");
    firebase.auth().signOut();
  };
  return (
    <section>
      <nav>
        <button onClick={handleLogout} className="btn btn-warning" />
      </nav>
    </section>
  );
};

export default LogOut;
