import { authService } from "fbase";
import React, { useState } from "react";

const AuthRequest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCheck") {
      setPwdCheck(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== pwdCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await authService.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
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
        <input
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 한 번 더 입력하세요"
          value={pwdCheck}
          onChange={onChange}
        />
        <input type="submit" value="계정 생성하기" />
      </form>
      <h4>{error}</h4>
    </div>
  );
};

export default AuthRequest;
