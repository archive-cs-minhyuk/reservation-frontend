import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const onResetClick = async () => {
    if (userObj.email !== "") {
      await authService
        .sendPasswordResetEmail(userObj.email)
        .then(function () {
          alert("비밀번호 재설정 메일이 전송되었습니다.");
        })
        .catch(function (error) {
          alert(error.message);
        });
    } else {
      alert("이메일을 다시 입력해주세요.");
    }
  };
  const phoneNumber = () => {
    if (userObj.photoURL.slice(0, 3) !== "010") {
      //google 로그인 거르기 위한 방법... 나중에 안되면 고칠것
      return "-";
    } else {
      return userObj.photoURL;
    }
  };
  return (
    <>
      <ul>
        <li>
          <h5>이메일</h5>
          <span>{userObj.email}</span>
        </li>
        <li>
          <h5>이름</h5>
          <span>{userObj.displayName}</span>
        </li>
        <li>
          <h5>연락처</h5>
          <span>{phoneNumber()}</span>
        </li>
        <li>
          <h5>가입 일자</h5>
          <span>{userObj.metadata.creationTime.slice(0, 17)}</span>
        </li>
      </ul>
      <button onClick={onLogOutClick}>Log Out</button>
      <button onClick={onResetClick}>Reset password</button>
    </>
  );
};
export default Profile;
