import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";
import { inputPhoneNumber } from "../util";
import styles from "./AuthRequest.module.css";

const AuthRequest = ({ userObj }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "username") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCheck") {
      setPwdCheck(value);
    } else if (name === "phone") {
      const temp = inputPhoneNumber(value);
      setPhone(temp);
    }
  };
  const updateProfilePhoneNumber = async ({ createdUser }) => {
    var appVerifier = new firebaseInstance.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    let phoneCredential;
    var provider = new firebaseInstance.auth.PhoneAuthProvider();
    await provider
      .verifyPhoneNumber("+82".concat(phone), appVerifier)
      .then(function (verificationId) {
        var verificationCode = window.prompt(
          "Please enter the verification " +
            "code that was sent to your mobile device."
        );
        phoneCredential = firebaseInstance.auth.PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        );
        createdUser.user.updatePhoneNumber(phoneCredential);
      })
      .then((result) => {
        // Phone credential now linked to current user.
        // User now can sign in with new phone upon logging out.
        console.log(result);
      })
      .catch((error) => {
        // Error occurred.
        console.log(error);
      });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== pwdCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    let createdUser;
    try {
      createdUser = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
      await createdUser.user
        .updateProfile({
          displayName: name,
          photoURL: null,
        })
        .then(function () {
          var displayName = createdUser.displayName;
          var photoURL = createdUser.photoURL;
        });
      updateProfilePhoneNumber(createdUser);
    } catch (error) {
      setError(error.message);
      alert(error);
    }
  };
  return (
    <div className={styles.authContainer}>
      <form onSubmit={onSubmit} className={styles.container}>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          required
          value={email}
          onChange={onChange}
          className={styles.Input}
        />
        <input
          name="username"
          type="text"
          placeholder="이름을 입력하세요"
          required
          value={name}
          onChange={onChange}
          className={styles.Input}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          value={password}
          onChange={onChange}
          className={styles.Input}
        />
        <input
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 한 번 더 입력하세요"
          value={pwdCheck}
          onChange={onChange}
          className={styles.Input}
        />
        <input
          name="phone"
          type="tel"
          placeholder="전화번호를 입력하세요"
          value={phone}
          onChange={onChange}
          className={styles.Input}
        />
        <input
          type="submit"
          value="인증번호 받기"
          className={styles.auth_button}
        />
      </form>
    </div>
  );
};

export default AuthRequest;
