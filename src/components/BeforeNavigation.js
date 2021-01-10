import React from "react";
import { Link } from "react-router-dom";

const BeforeNavigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">메인 화면으로 돌아가기</Link>
      </li>
      <li>
        <Link to="/authRequest">회원가입</Link>
      </li>
    </ul>
  </nav>
);

export default BeforeNavigation;
