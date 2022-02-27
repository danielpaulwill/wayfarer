import React, { useState } from "react";

function ChooseYourAdventurer() {
  const [adventurerName, setAdventurerName] = useState("...")
  const [adventurerCharacter, setAdventurerCharacter] = useState("XXX")
  
  function handleOnChange(e) {
    setAdventurerName(e.target.value)
  }

  function handleOnClick(e) {
    console.log(e.target.value)
  }

  return (
    <div className="standard">
      <h2>Choose your adventurer</h2>
        <input
        type="text" 
        placeholder="Name..." 
        className="textInput"
        onChange={handleOnChange}
        ></input>
        <p className="characterPlaceholder" onClick={handleOnClick}>X</p>
        <p className="characterPlaceholder" onClick={handleOnClick} value="Y" >Y</p>
        <h2>Your Adventurer</h2>
        <h3>{adventurerName}</h3>
        <p id="chosenCharacter" >{adventurerCharacter}</p>
    </div>
  )
};

export default ChooseYourAdventurer;