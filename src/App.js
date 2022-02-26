import React, { useState } from "react"
import './App.css';
import Welcome from "./Setup/Welcome";
import ChooseYourAdventurer from "./Setup/ChooseYourAdventurer";

function App() {
  const [welcomeAndChoose, setWelcomeAndChoose] = useState(false)

  function handleWelcomeClick() {
    setWelcomeAndChoose(welcomeAndChoose => !welcomeAndChoose)
  }

  return (
    <div>
      {welcomeAndChoose ? <Welcome handleClick={handleWelcomeClick}/> : <ChooseYourAdventurer />}
    </div>
  );
}

export default App;
