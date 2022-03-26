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
        <p>ENTER NAME BELOW</p>
          <input
          type="text" 
          placeholder="Enter Name Here..." 
          className="textInput"
          onChange={handleOnChange} >
          </input>
          <div className="center">
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={handleOnClick} src={warriorAvatar}></img>
              <p className="chooseYourAvatarLabel">WARRIOR</p>
            </div>
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={handleOnClick} src={archerAvatar}></img>
              <p className="chooseYourAvatarLabel">ARCHER</p>
            </div>
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={handleOnClick} src={mageAvatar}></img>
              <p className="chooseYourAvatarLabel">MAGE</p>
            </div>
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