import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";
import styles from "./Auth.module.css";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message); //on screen: error message
      alert(error);
    }
  };
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider; //if other than google, add else if
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  return (
    <div className={styles.authContainer}>
      <form onSubmit={onSubmit} className={styles.container}>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          required
          className={styles.authInput}
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          className={styles.authInput}
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Sign In" className={styles.authSubmit} />
      </form>
      <button
        name="google"
        onClick={onSocialClick}
        className={styles.google_button}
      >
        Sign In by Google
      </button>
      <div className={styles.buttonContainer}>
        <div
          onClick={() => history.push("/authRequest")}
          className={styles.authrequest}
        >
          Create Account
        </div>
        <div
          onClick={() => history.push("/resetPassword")}
          className={styles.forgotpassword}
        >
          Forgot your password?
        </div>
      </div>
    </div>
  );
};
export default Auth;
