import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import OneOneChoices from "../Stage 1/OneOneChoices";

function ChooseYourAdventurer({ name, avatar, handleOnChange, handleOnClick, archerAvatar, mageAvatar, warriorAvatar, health, strength, defense, luck }) {

  return (
    <div className="adventurePage">
      <Sidebar 
        name={name}
        avatar={avatar}
        health={health}
        strength={strength}
        defense={defense}
        luck={luck} />
      <div id="chooseYourAdventurer">
        <h2>Choose your adventurer</h2>
          <input
          type="text" 
          placeholder="Enter Your Adventurer's Name" 
          className="textInput"
          onChange={handleOnChange} >
          </input>
          <div className="center">
            <img className="chooseYourAvatar" onClick={handleOnClick} src={warriorAvatar}></img>
            <img className="chooseYourAvatar" onClick={handleOnClick} src={archerAvatar}></img>
            <img className="chooseYourAvatar" onClick={handleOnClick} src={mageAvatar}></img>
          </div>
          <br></br>
          <div className="center">
            <NavLink to="/adventure">
              <button id="chooseAdventureButton">Confirm your adventurer</button>
            </NavLink>
          </div>
      </div>
    </div>
  )
};

export default ChooseYourAdventurer;