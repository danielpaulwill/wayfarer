import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import OneOneChoices from "../Stage 1/OneOneChoices";

function ChooseYourAdventurer({ name, avatar, handleOnChange, handleOnClick, maleAvatar, femaleAvatar, health, attack, defense, luck }) {

  return (
    <div className="adventurePage">
      <Sidebar 
        name={name}
        avatar={avatar}
        health={health}
        attack={attack}
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
            <img className="characterPlaceholder" onClick={handleOnClick} src={maleAvatar}></img>
            <img className="characterPlaceholder" onClick={handleOnClick} src={femaleAvatar}></img>
          </div>
          <br></br>
          <div className="center">
            <NavLink to="/adventure/1-1">
              <button id="chooseAdventureButton">Confirm your adventurer</button>
            </NavLink>
          </div>
      </div>
    </div>
  )
};

export default ChooseYourAdventurer;