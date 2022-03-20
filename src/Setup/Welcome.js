import React from "react";
import { NavLink } from "react-router-dom"

function Welcome({ handleClick }) {


  return (
    <div id="welcome">
      <h2>Welcome to Wayfarer</h2>
      <NavLink to="/setup">
        <button className="button" onClick={handleClick}>Click me to begin!</button>
      </NavLink>
    </div>
  )
};

export default Welcome;