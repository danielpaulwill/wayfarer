import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import OneOneChoices from "../Stage 1/OneOneChoices";
import ChooseYourCharacter from "./ChooseYourCharacter";


function ChooseYourAdventurer({ name, avatar, handleOnChange, handleOnClick, archerAvatar, mageAvatar, warriorAvatar, health, strength, defense, luck }) {

  const chooseYourCharacter = <ChooseYourCharacter 
  name={name}
  handleOnChange={handleOnChange}
  avatar={avatar}
  handleOnClick={handleOnClick}
  archerAvatar={archerAvatar}
  mageAvatar={mageAvatar}
  warriorAvatar={warriorAvatar}
  health={health}
  strength={strength}
  defense={defense}
  luck={luck}/>
  const [choicesPage, setChoicesPage] = useState(chooseYourCharacter)
  
  // const oneOneOneResult = <OneOneOptOneResult handleGoBack={handleOneOneOneGoBack} />
  

  return (
    <div className="adventurePage">
      <Sidebar 
        name={name}
        avatar={avatar}
        health={health}
        strength={strength}
        defense={defense}
        luck={luck} />
      {choicesPage}
    </div>
  )
};

export default ChooseYourAdventurer;