import React from "react";

function OneTwoChoices({ decrementHealth, incrementDefense, randomizeLuck }) {

  return (
    <div>
        <h1>Stage 1-2</h1>
        <div className="adventureChoices">
          <p>If you had three choices, which one would you choose?</p>
          <br></br>
          <button className="choiceButton" onClick={decrementHealth}>Decrement Health</button>
          <button className="choiceButton" onClick={incrementDefense}>Increment Defense</button>
          <button className="choiceButton" onClick={randomizeLuck} >Randomize Luck</button>
        </div>
    </div>
  )
};

export default OneTwoChoices;