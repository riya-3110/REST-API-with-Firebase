import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Link to="/">Logout</Link>
    </div>
  );
};
