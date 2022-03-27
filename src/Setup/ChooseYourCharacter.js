import React from "react";

function ChooseYourCharacter({ name, avatar, handleOnChange, handleOnClick, archerAvatar, mageAvatar, warriorAvatar, health, strength, defense, luck, onNextPage }) {

  return (
    <div id="chooseYourAdventurer">
      <h2>Choose Your Character</h2>
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
          {/* <NavLink to="/adventure"> */}
            <button id="chooseAdventureButton" onClick={onNextPage}>Confirm your adventurer</button>
          {/* </NavLink> */}
        </div>
    </div>
  )
};

export default ChooseYourCharacter;