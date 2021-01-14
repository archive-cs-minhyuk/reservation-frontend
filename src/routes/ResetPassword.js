import { authService } from "fbase";
import React, { useState } from "react";

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
          console.log(error.message);
        });
    } else {
      alert("이메일이 맞지 않습니다");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          requir
          value={email}
          onChange={onChange}
        />
        <input type="submit" value="비밀번호 재설정 메일 보내기" />
      </form>
    </div>
  );
};
export default ResetPassword;
