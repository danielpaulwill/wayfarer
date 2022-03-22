import React, { useState } from "react"
import './App.css';
import Welcome from "./Setup/Welcome";
import ChooseYourAdventurer from "./Setup/ChooseYourAdventurer";
import Adventure from "./Adventure";
import { Route } from "react-router-dom";

function App() {
  const blankAvatar = "https://lh3.googleusercontent.com/Zggtwo5oN4pPUxlzvZNP8aK1OWgTpjBLq7p4w5kckO4Hpi-ccknzqIoJu8tY2atwaXxBmH82KKrvqa5I6uxcHwcP3yC40YX0JPSfuv4X1iZHZSuanBtQQLRatHOKmNoV5lQRyKz04YpeQU2UsoFBowX5rZQC1m_VJCUHoRsiMPuiVDWAi485N0pvGIFhJ2_f-AV5xc9YPWW3aBxgVIcKJ_52sClXmBPJq2M1D_BdLi7qJY7DWl0ng5HJAtRRJDOmGO0SW7GDq3ku3bpHV6Bh7nUJ95d5XH3hEVCYdO4m-dbbl4Tm_KPIZbWCH6x95CANPtThrUtlaprhpaNINtfsliPNvOX4nkROQwE1-rUNAmHnwMB5Qbgs4jKFRvtbxHVxchjG8o1oy0E1liZ7pLiRXjXySuOHUz5npGfOBsQbPtoEHO_lybDSewe6yqZjA6mcLlHlshPdBwU7oqji1pxgraijsx83A_ccRDF6vMOFNBfzjiYFApb5u2B98nWYUJ4cSf7gCX61O3x6_UpMyOF0Sl3jbb_NnITxpDZmPF_ZzV0_0y2j73z4Vke-Xdiqtltl597julQdMHEsrWpZymytqTSk7mT6GgnVIPZJh5Q_MVe-cckWhQhk4wliWYffHg1i2g1ik2O1HtxXSVDAq8VHkKol370LtcwAfqG0tJGKIY72Ogw9NhQIW-smE2Dg4xQ7Hg15hm4VTitA2ebNSI4wxwRaGdFOM6K1rVPoj_7sSvulNr016H-RZbzb5pm2kiHFUmlMzmWqzm1jw9nb0tFnGUxP17bznbsJjp6l6AnVGncdEzWvgD3yQTlLXkj4TKDNYRuoAw=s180-no?authuser=0"
  const maleAvatar = "https://lh3.googleusercontent.com/kwZZEcOh1ZDxLAFOlld-Xn_yZyjiRyxMIaivIhzJqBOZj0UYGoLf8GFzbEm-IMboSwJ-rOcdDK3FjkYTcOuNHrljZyVor4fa4MiE1w42C6zckkUX0xzUjLT7mbgFMo28WB3PkQUBnw0UczPmL9u40r77RqEhXX8GsrGkJ4Wh3QAKRGFOq5FrEJsozcsfFV-9O7Woxq2EqSGhzYTD1wrZaM9Sn5zxTcEs3eWE9c1mk3YmZAnSF5_irxtWVi2l0FG0tbOPUwieMk5OgjqopNf_dcNUYcO5IBKeCsYuyOckoOokWg5YqO8e_Ij7un_v7-uu7gVQCVBS4z1P9M0Kjdgjt9XsSeRBX8ndKOZuZh3b4IOmQbjjaO8KT0CM43HlAEErJVjDqblH-Gb6diMSpUgpXeBdTJEpuPQUDRNxhahjWptQxIPM1NdBFn5KFzvE-vF-Xbp3SK6OhR5mwTLQomZ9dHtxV8fGZUamiVb2CI8G-eBdGP1GAq1NGKBIGku8-Dv_lr2V_agmOOvapfGk_8hKDu6tDzrM7117tu766KTXOaxaWkGPeWDHAqwB-t9oZg56yMr04hVVnY58VClLuq0Qw6macMzoiBKdC-Rwin8dM0wc_FLWpwNyp-5yEr50RwxWYLbI015qONLbUAB3ObxiPu_ioq38Gf2rpKm2-Y1JGzhZsHhFPTiW3ndMFZHnogAtO7Ycci6O12-f46daowlAys7ZeQ-OZLFHchzeL5c8fbqaLUYQU2hGB4pijR2EOZ7m2GCGlnl-3fwqzAwtXlF42cRpxEVHXRIDsIsP1icv4SPTYFy9afqYYy1E-KtQV2Avjugl1A=s180-no?authuser=0"
  const femaleAvatar = "https://lh3.googleusercontent.com/1q8C94UBNn3-mb1v6BqlhkFcW096u_udWWougGjK4DRXdtGehNnoy8akYa9B7SZCtMEu8e_dSfrJ6b07H36mU6V1TmCajC-XKdjr917ZNAKkrkpG8LL6DVNAAcbRoaLq7gUzfvjuVTQA_BgDs6IIj1qOLxfXA8i1a9AQGLeKP4YMaZfVVEB_mE5XAFXQIhnYZQgFoDVHygHJsS_bmp3bzgBhnYB924HsjoIHsmQtzHXyW1bl9jkc-H903AYkWZafUo6GNnAbSA5FJn-nw2mCodLgi0sgtr9GRV8yXWnq4gCzQYz9pQLpSOs5FzMu3CG3C7oQsKk0Rt2tswlQ7RAfkLdAXID761KDkQZckn5IpbXdgK8zS6cM_WH2X8lk5v6UUWFqHiAN5hPR8_LU0uajeUgj5NUkvWcehElnKUpc7vqSw5kmtxLZJbLlowGNCXNuqvoXW3Bkv3oDql6Yo8J3_NN7iGDxun3Ksx6clgmGDrYBfcMt83a5pfxuI3xgKC2piJcK6rvTp5ELFTgdGLTK6t0rS6Gju0XPyIjw4R6C-fdhjXQG_LPAL8qVYp6P1aPGupE58LntXpDINtnnIyY6KvPAQFORN-fpmPXzYcALuyUh49IivKpBWeIniN0uPiKg7FHMVxuQIUWYtfkp0e175lvMnQA-B9YZCQnzl7GSrSdsfOQo5VbMQmhwf9CcIhAJILMusmfDb-6G6I0v0hq18gdNyuv7qyxuFJl3p-FsPyUb18ovtXPayC8sgirRiTdp-tHLsRGHEPz7oHKbCudiw26Ks-LD8NZlOoK8UVIk3PUGNmkct9WfIAIfneimlllnklf0vg=s180-no?authuser=0"
  const [characterName, setCharacterName] = useState("...")
  const [characterAvatar, setCharacterAvatar] = useState(blankAvatar)
  const [health, setHealth] = useState(100)
  const [attack, setAttack] = useState(20)
  const [defense, setDefense] = useState(30)
  const [luck, setLuck] = useState(30)

  // window.onbeforeunload = function() { return "Your work will be lost."; };

  function handleNameChange(e) {
    setCharacterName(e.target.value.toUpperCase())
  }

  function handleAvatarChange(e) {
    if (e.target.src === maleAvatar) {
      setCharacterAvatar(maleAvatar)
    } else if (e.target.src === femaleAvatar) {
      setCharacterAvatar(femaleAvatar)
    }
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
          handleOnClick={handleAvatarChange}
          maleAvatar={maleAvatar}
          femaleAvatar={femaleAvatar} />
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
