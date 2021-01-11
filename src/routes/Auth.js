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
          placeholder="이메일을 입력하세요"
          required
          className={styles.authInput}
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          className={styles.authInput}
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="로그인" className={styles.authSubmit} />
      </form>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => history.push("/authRequest")}
          className={styles.auth_button}
        >
          회원가입
        </button>
        <button
          name="google"
          onClick={onSocialClick}
          className={styles.google_button}
        >
          구글로 로그인
        </button>
      </div>
    </div>
  );
};
export default Auth;
