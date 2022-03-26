import React from "react";

function Sidebar({ name, avatar, health, strength, defense, luck }) {

  return (
    <div className="sidebarAvatar">
      <h2 style={name === "..." ? {color: "black"} : {color: "white"}}>{name}</h2>
      <img src={avatar} referrerPolicy="no-referrer"></img>
      <div className="sidebarStats">
        <h3>Stats</h3>
        <p>Health: {health}</p>
        <div id="healthBar" style={{width: `${health}%`}}></div>
        <p>Strength: {strength}</p>
        <div id="strengthBar" style={{width: `${strength}%`}}></div>
        <p>Defense: {defense}</p>
        <div id="defenseBar" style={{width: `${defense}%`}}></div>
        <p>Luck: {luck}</p>
        <div id="luckBar" style={{width: `${luck}%`}}></div>
      </div>
    </div>
  )
};

export default Sidebar;





