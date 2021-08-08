import React, { useEffect, useState } from "react";
import firebase from "firebase";

const Login = ({ todoUserData }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => {
    clearErrors();
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disable":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
            default:
              break;
          }
        });
    } catch (e) {
      console.log("erreur");
    }
  };

  const handleSignup = () => {
    clearErrors();
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            default:
              break;
          }
        });
    } catch (e) {
      console.log("erreur");
    }
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  todoUserData(user);

  return (
    <section className="login">
      <div className="loginContainer card border-0 shadow rounded-3 my-5">
        <h1 className={"text-center"}>Todo</h1>
        <div class="card-body p-4 p-sm-5">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg error">{emailError}</p>
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="errorMsg error">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button
                  type="submit"
                  onClick={handleLogin}
                  class="btn btn-warning"
                >
                  Sign in
                </button>
                <p>
                  Don't have an account ?{" "}
                  <a
                    onClick={() => setHasAccount(!hasAccount)}
                    className="underlineHover"
                  >
                    {" "}
                    Sign up
                  </a>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSignup} class="btn btn-primary">
                  Sign up
                </button>
                <p>
                  Have an account ?
                  <a
                    onClick={() => setHasAccount(!hasAccount)}
                    className="underlineHover"
                  >
                    Sign in
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
