import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form action="/home" method="post">
        <div className="items">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="items">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <Link to="/signup">Go to SignUp</Link>
      </form>
    </div>
  );
};
