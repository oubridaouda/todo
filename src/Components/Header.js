import React from "react";
import firebase from "firebase";

const Header = ({ todoUserData }) => {
  const handleLogout = () => {
    todoUserData("");
    firebase.auth().signOut();
  };
  return (
    <div className="header header-fixed">
      <div className="navbar container">
        <div className="logo">
          <a href="#home">TODO</a>
        </div>
        <button onClick={handleLogout} className="btn btn-warning">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
