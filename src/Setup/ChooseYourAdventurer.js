import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import RightSidebar from "../RightSidebar";
import OneOneChoices from "../Stage 1/OneOneChoices";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ChooseYourItems from "./ChooseYourItems";

function ChooseYourAdventurer({ name, avatar, handleOnChange, handleOnClick, archerAvatar, mageAvatar, warriorAvatar, health, strength, defense, luck, currentItems }) {

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
  luck={luck}
  onNextPage={handleNextPageClick} />

  const chooseYourItems = <ChooseYourItems 
  currentItems={currentItems}
  archerAvatar={archerAvatar}
  mageAvatar={mageAvatar}
  warriorAvatar={warriorAvatar}/>
  
  const [choicesPage, setChoicesPage] = useState(chooseYourItems)
  

  function handleNextPageClick() {
    setChoicesPage(chooseYourItems)
   }

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
      <RightSidebar 
      name={name}
      avatar={avatar}
      health={health}
      strength={strength}
      defense={defense}
      luck={luck}
      currentItems={currentItems} />
    </div>
  )
};

export default ChooseYourAdventurer;