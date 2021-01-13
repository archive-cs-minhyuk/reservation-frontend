import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
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
          <span>{userObj.photoURL}</span>
        </li>
        <li>
          <h5>가입 일자</h5>
          <span>{userObj.metadata.creationTime.slice(0, 17)}</span>
        </li>
      </ul>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
