import React from "react";
import { NavLink } from "react-router-dom";

function ChooseYourAdventurer({ name, avatar, handleOnChange, handleOnClick, maleAvatar, femaleAvatar }) {

  return (
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
            <h3>Your Adventurer</h3>
            <h2 style={name === "..." ? {color: "black"} : {color: "white"}}>{name}</h2>
            <img id="chosenCharacter" alt="pick your adventurer" src={avatar}></img>
            <NavLink to="/adventure/1-1">
              <button id="chooseAdventureButton">Confirm your adventurer</button>
            </NavLink>
          </div>
      </div>
  )
};

export default ChooseYourAdventurer;