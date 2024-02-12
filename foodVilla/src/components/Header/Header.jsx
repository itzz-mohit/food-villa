import React, { useState } from "react";
import "./Header.css";
import Title from "./Title";
import { Link } from "react-router-dom";
function Header() {
  const [loginbtn, setLoginbtn] = useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li>Home</li>
          <li>About</li>
          <li>Contact</li> */}
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
