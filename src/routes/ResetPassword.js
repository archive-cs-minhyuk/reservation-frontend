import { authService } from "fbase";
import React, { useState } from "react";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (email !== "") {
      await authService
        .sendPasswordResetEmail(email)
        .then(function () {
          console.log("비밀번호 reset");
        })
        .catch(function (error) {
          alert(error.message);
        });
    } else {
      alert("이메일을 다시 입력해주세요.");
    }
  };
  return (
    <div className={styles.authContainer}>
      <form onSubmit={onSubmit} className={styles.container}>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          requir
          value={email}
          onChange={onChange}
          className={styles.authInput}
        />
        <input
          type="submit"
          value="비밀번호 재설정 메일 보내기"
          className={styles.authSubmit}
        />
      </form>
    </div>
  );
};
export default ResetPassword;
