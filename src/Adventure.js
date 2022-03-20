import React from "react";
import Sidebar from "./Sidebar";

function Adventure({ name, avatar, health, attack, defense, luck }) {

  return (
    <div className="adventurePage">
      <Sidebar 
        name={name}
        avatar={avatar}
        health={health}
        attack={attack}
        defense={defense}
        luck={luck} />
      <div className="adventureMain">
        <h1>Stage 1-1</h1>
        <div className="adventureChoices">
          <p>If you had four choices, which one would you choose?</p>
          <br></br>
          <button className="choiceButton">Choice 1</button>
          <button className="choiceButton">Choice 2</button>
          <button className="choiceButton">Choice 3</button>
          <button className="choiceButton">Choice 4</button>
        </div>
      </div>
    </div>
  )
};

export default Adventure;