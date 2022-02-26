import React from "react";

function Welcome({ handleClick }) {


  return (
    <div className="standard">
      <h2>Welcome to Wayfarer</h2>
      <button className="button" onClick={handleClick}>Click me to begin!</button>
    </div>
  )
};

export default Welcome;