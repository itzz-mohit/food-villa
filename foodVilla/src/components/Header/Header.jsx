import React, { useState, useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import UserContext from "../../contexts/UserContext.js";
import { useSelector } from "react-redux";

function Header() {
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Title />

        <div className="flex items-center space-x-4">
          <span className="font-semibold text-lg">{loggedInUser}</span>
          <span className={`text-${onlineStatus ? "green" : "red"}-500 text-lg`}>
            {onlineStatus ? "🟢" : "🔴"}
          </span>

          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/grocery" className="nav-link">
            Grocery
          </Link>

          <Link to="/cart" className="relative flex items-center nav-link">
            <div className="mr-3 relative">
              <div className="absolute left-3">
                <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartItems.length}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </Link>

          <button
            className="login-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() =>
              loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login")
            }
          >
            {loginbtn}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
