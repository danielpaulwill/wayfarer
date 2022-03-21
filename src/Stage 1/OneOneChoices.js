import React from "react";
import { NavLink} from "react-router-dom"

function OneOneChoices() {

  return (
    <div>
        <h1>Stage 1-1</h1>
        <div className="adventureChoices">
          <p>If you had four choices, which one would you choose?</p>
          <br></br>
          <NavLink to="/adventure/1-1-1">
          <button className="choiceButton">Choice 1</button>
          </NavLink>
          <NavLink to="/adventure/1-2">
          <button className="choiceButton">Choice 2</button>
          </NavLink>
          <NavLink to="/adventure/1-2">
          <button className="choiceButton">Choice 3</button>
          </NavLink>
          <NavLink to="/adventure/1-2">
          <button className="choiceButton">Choice 4</button>
          </NavLink>
        </div>
    </div>
  )
};

export default OneOneChoices;