import React from "react";

function Sidebar({ name, avatar, health, attack, defense, luck }) {

  return (
    <div className="sidebarAvatar">
      <h2>{name}</h2>
      <img src={avatar}></img>
      <div className="sidebarStats">
        <h3>Stats</h3>
        <p>Health: {health}</p>
        <div id="healthBar" style={{width: `${health}%`}}></div>
        <p>Attack: {attack}</p>
        <div id="attackBar" style={{width: `${attack}%`}}></div>
        <p>Defense: {defense}</p>
        <div id="defenseBar" style={{width: `${defense}%`}}></div>
        <p>Luck: {luck}</p>
        <div id="luckBar" style={{width: `${luck}%`}}></div>
      </div>
    </div>
  )
};

export default Sidebar;





