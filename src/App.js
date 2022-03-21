import React, { useState } from "react"
import './App.css';
import Welcome from "./Setup/Welcome";
import ChooseYourAdventurer from "./Setup/ChooseYourAdventurer";
import Adventure from "./Adventure";
import { Route } from "react-router-dom";

function App() {
  const [characterName, setCharacterName] = useState("...")
  const [characterAvatar, setCharacterAvatar] = useState("https://lh3.googleusercontent.com/Zggtwo5oN4pPUxlzvZNP8aK1OWgTpjBLq7p4w5kckO4Hpi-ccknzqIoJu8tY2atwaXxBmH82KKrvqa5I6uxcHwcP3yC40YX0JPSfuv4X1iZHZSuanBtQQLRatHOKmNoV5lQRyKz04YpeQU2UsoFBowX5rZQC1m_VJCUHoRsiMPuiVDWAi485N0pvGIFhJ2_f-AV5xc9YPWW3aBxgVIcKJ_52sClXmBPJq2M1D_BdLi7qJY7DWl0ng5HJAtRRJDOmGO0SW7GDq3ku3bpHV6Bh7nUJ95d5XH3hEVCYdO4m-dbbl4Tm_KPIZbWCH6x95CANPtThrUtlaprhpaNINtfsliPNvOX4nkROQwE1-rUNAmHnwMB5Qbgs4jKFRvtbxHVxchjG8o1oy0E1liZ7pLiRXjXySuOHUz5npGfOBsQbPtoEHO_lybDSewe6yqZjA6mcLlHlshPdBwU7oqji1pxgraijsx83A_ccRDF6vMOFNBfzjiYFApb5u2B98nWYUJ4cSf7gCX61O3x6_UpMyOF0Sl3jbb_NnITxpDZmPF_ZzV0_0y2j73z4Vke-Xdiqtltl597julQdMHEsrWpZymytqTSk7mT6GgnVIPZJh5Q_MVe-cckWhQhk4wliWYffHg1i2g1ik2O1HtxXSVDAq8VHkKol370LtcwAfqG0tJGKIY72Ogw9NhQIW-smE2Dg4xQ7Hg15hm4VTitA2ebNSI4wxwRaGdFOM6K1rVPoj_7sSvulNr016H-RZbzb5pm2kiHFUmlMzmWqzm1jw9nb0tFnGUxP17bznbsJjp6l6AnVGncdEzWvgD3yQTlLXkj4TKDNYRuoAw=s180-no?authuser=0")
  const [health, setHealth] = useState(100)
  const [attack, setAttack] = useState(20)
  const [defense, setDefense] = useState(30)
  const [luck, setLuck] = useState(30)

  window.onbeforeunload = function() { return "Your work will be lost."; };

  function handleNameChange(e) {
    setCharacterName(e.target.value.toUpperCase())
  }

  function handleAvatarChange(e) {
    setCharacterAvatar(e.target.src)
  }

  function handleDecrementHealth() {
    if (health > 4)
    setHealth(health => health - 5)
  }

  function handleIncrementDefense() {
    if (defense < 96)
    setDefense(defense => defense + 5)
  }

  function handleRandomizeLuck() {
    setLuck(Math.floor(Math.random() * 100))
  }

  return (
    <div>
      <Route path="/setup">
        <ChooseYourAdventurer
          name={characterName}
          handleOnChange={handleNameChange}
          avatar={characterAvatar}
          handleOnClick={handleAvatarChange} />
      </Route>
      <Route path="/adventure">
        <Adventure
          name={characterName}
          avatar={characterAvatar}
          health={health}
          attack={attack}
          defense={defense}
          luck={luck}
          decrementHealth={handleDecrementHealth}
          incrementDefense={handleIncrementDefense}
          randomizeLuck={handleRandomizeLuck} />
      </Route>
      <Route exact path="/">
        <Welcome />
      </Route>
    </div>
  );
}

export default App;
