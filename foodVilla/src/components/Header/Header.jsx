import React, { useState } from "react";
import "./Header.css";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
function Header() {
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li> {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>Home</li>
          <li>About</li>
          <li>Contact</li> */}
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
