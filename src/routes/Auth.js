import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";
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
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="로그인" />
      </form>
      <div>
        <button onClick={() => history.push("/authRequest")}>회원가입</button>
      </div>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <h4>{error}</h4>
      </div>
    </div>
  );
};
export default Auth;
