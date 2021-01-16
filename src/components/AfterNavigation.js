import { authService } from "fbase";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./AfterNavigation.module.css";
import { confirmation } from "../util";

const AfterNavigation = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <header>
      <button
        onClick={(e) => {
          history.push("/home");
        }}
        className={styles.home}
      >
        Home
      </button>
      <button
        onClick={(e) => {
          history.push("/profile");
        }}
        className={styles.profile}
      >
        My Profile
      </button>
      <button
        onClick={confirmation("로그아웃하시겠습니까?", onLogOutClick, () => {})}
        className={styles.logout}
      >
        Log Out
      </button>
    </header>
  );
};

export default AfterNavigation;
