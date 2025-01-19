import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form action="/" method="post">
        <div className="items">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="items">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="items">
          <label htmlFor="cno">Contact Number</label>
          <input type="text" id="cno" name="cno" required />
        </div>
        <div className="items">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <button type="submit">SignUp</button>
        <Link to="/">Go to login</Link>
      </form>
    </div>
  );
};
