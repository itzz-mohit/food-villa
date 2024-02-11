import React, { useState } from "react";
import "./Header.css";
import Title from "./Title";

function Header() {
  const [loginbtn, setLoginbtn] = useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              loginbtn == "Login" ? setLoginbtn("Logout") : setLoginbtn("Login")
            }
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
