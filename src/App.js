import React, { useState } from "react"
import './App.css';
import Welcome from "./Setup/Welcome";
import ChooseYourAdventurer from "./Setup/ChooseYourAdventurer";
import { Route } from "react-router-dom";

function App() {
  const [characterName, setCharacterName] = useState("...")
  const [characterAvatar, setCharacterAvatar] = useState("https://lh3.googleusercontent.com/Zggtwo5oN4pPUxlzvZNP8aK1OWgTpjBLq7p4w5kckO4Hpi-ccknzqIoJu8tY2atwaXxBmH82KKrvqa5I6uxcHwcP3yC40YX0JPSfuv4X1iZHZSuanBtQQLRatHOKmNoV5lQRyKz04YpeQU2UsoFBowX5rZQC1m_VJCUHoRsiMPuiVDWAi485N0pvGIFhJ2_f-AV5xc9YPWW3aBxgVIcKJ_52sClXmBPJq2M1D_BdLi7qJY7DWl0ng5HJAtRRJDOmGO0SW7GDq3ku3bpHV6Bh7nUJ95d5XH3hEVCYdO4m-dbbl4Tm_KPIZbWCH6x95CANPtThrUtlaprhpaNINtfsliPNvOX4nkROQwE1-rUNAmHnwMB5Qbgs4jKFRvtbxHVxchjG8o1oy0E1liZ7pLiRXjXySuOHUz5npGfOBsQbPtoEHO_lybDSewe6yqZjA6mcLlHlshPdBwU7oqji1pxgraijsx83A_ccRDF6vMOFNBfzjiYFApb5u2B98nWYUJ4cSf7gCX61O3x6_UpMyOF0Sl3jbb_NnITxpDZmPF_ZzV0_0y2j73z4Vke-Xdiqtltl597julQdMHEsrWpZymytqTSk7mT6GgnVIPZJh5Q_MVe-cckWhQhk4wliWYffHg1i2g1ik2O1HtxXSVDAq8VHkKol370LtcwAfqG0tJGKIY72Ogw9NhQIW-smE2Dg4xQ7Hg15hm4VTitA2ebNSI4wxwRaGdFOM6K1rVPoj_7sSvulNr016H-RZbzb5pm2kiHFUmlMzmWqzm1jw9nb0tFnGUxP17bznbsJjp6l6AnVGncdEzWvgD3yQTlLXkj4TKDNYRuoAw=s180-no?authuser=0")

  function handleNameChange(e) {
    setCharacterName(e.target.value)
  }

  function handleAvatarChange(e) {
    setCharacterAvatar(e.target.src)
  }

  return (
    <div>
      <Route path="/setup">
        <ChooseYourAdventurer
          name={characterName}
          handleOnChange={handleNameChange}
          character={characterAvatar}
          handleOnClick={handleAvatarChange} />
      </Route>
      <Route exact path="/">
        <Welcome />
      </Route>
    </div>
  );
}

export default App;
