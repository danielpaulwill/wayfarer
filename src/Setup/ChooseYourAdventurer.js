import React from "react";
import { NavLink } from "react-router-dom";

function ChooseYourAdventurer({ name, avatar, handleOnChange, handleOnClick }) {
  
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
          <img className="characterPlaceholder" onClick={handleOnClick} src="https://lh3.googleusercontent.com/kwZZEcOh1ZDxLAFOlld-Xn_yZyjiRyxMIaivIhzJqBOZj0UYGoLf8GFzbEm-IMboSwJ-rOcdDK3FjkYTcOuNHrljZyVor4fa4MiE1w42C6zckkUX0xzUjLT7mbgFMo28WB3PkQUBnw0UczPmL9u40r77RqEhXX8GsrGkJ4Wh3QAKRGFOq5FrEJsozcsfFV-9O7Woxq2EqSGhzYTD1wrZaM9Sn5zxTcEs3eWE9c1mk3YmZAnSF5_irxtWVi2l0FG0tbOPUwieMk5OgjqopNf_dcNUYcO5IBKeCsYuyOckoOokWg5YqO8e_Ij7un_v7-uu7gVQCVBS4z1P9M0Kjdgjt9XsSeRBX8ndKOZuZh3b4IOmQbjjaO8KT0CM43HlAEErJVjDqblH-Gb6diMSpUgpXeBdTJEpuPQUDRNxhahjWptQxIPM1NdBFn5KFzvE-vF-Xbp3SK6OhR5mwTLQomZ9dHtxV8fGZUamiVb2CI8G-eBdGP1GAq1NGKBIGku8-Dv_lr2V_agmOOvapfGk_8hKDu6tDzrM7117tu766KTXOaxaWkGPeWDHAqwB-t9oZg56yMr04hVVnY58VClLuq0Qw6macMzoiBKdC-Rwin8dM0wc_FLWpwNyp-5yEr50RwxWYLbI015qONLbUAB3ObxiPu_ioq38Gf2rpKm2-Y1JGzhZsHhFPTiW3ndMFZHnogAtO7Ycci6O12-f46daowlAys7ZeQ-OZLFHchzeL5c8fbqaLUYQU2hGB4pijR2EOZ7m2GCGlnl-3fwqzAwtXlF42cRpxEVHXRIDsIsP1icv4SPTYFy9afqYYy1E-KtQV2Avjugl1A=s180-no?authuser=0"></img>
          <img className="characterPlaceholder" onClick={handleOnClick} src="https://lh3.googleusercontent.com/1q8C94UBNn3-mb1v6BqlhkFcW096u_udWWougGjK4DRXdtGehNnoy8akYa9B7SZCtMEu8e_dSfrJ6b07H36mU6V1TmCajC-XKdjr917ZNAKkrkpG8LL6DVNAAcbRoaLq7gUzfvjuVTQA_BgDs6IIj1qOLxfXA8i1a9AQGLeKP4YMaZfVVEB_mE5XAFXQIhnYZQgFoDVHygHJsS_bmp3bzgBhnYB924HsjoIHsmQtzHXyW1bl9jkc-H903AYkWZafUo6GNnAbSA5FJn-nw2mCodLgi0sgtr9GRV8yXWnq4gCzQYz9pQLpSOs5FzMu3CG3C7oQsKk0Rt2tswlQ7RAfkLdAXID761KDkQZckn5IpbXdgK8zS6cM_WH2X8lk5v6UUWFqHiAN5hPR8_LU0uajeUgj5NUkvWcehElnKUpc7vqSw5kmtxLZJbLlowGNCXNuqvoXW3Bkv3oDql6Yo8J3_NN7iGDxun3Ksx6clgmGDrYBfcMt83a5pfxuI3xgKC2piJcK6rvTp5ELFTgdGLTK6t0rS6Gju0XPyIjw4R6C-fdhjXQG_LPAL8qVYp6P1aPGupE58LntXpDINtnnIyY6KvPAQFORN-fpmPXzYcALuyUh49IivKpBWeIniN0uPiKg7FHMVxuQIUWYtfkp0e175lvMnQA-B9YZCQnzl7GSrSdsfOQo5VbMQmhwf9CcIhAJILMusmfDb-6G6I0v0hq18gdNyuv7qyxuFJl3p-FsPyUb18ovtXPayC8sgirRiTdp-tHLsRGHEPz7oHKbCudiw26Ks-LD8NZlOoK8UVIk3PUGNmkct9WfIAIfneimlllnklf0vg=s180-no?authuser=0"></img>
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