import React, { useState } from "react";

function ItemInfoSidebar({ currentItems }) {

  return (
    <div id="rightSidebar">
      <div className="sidebarInfo">
        <h1 className="itemInfoArrow">⬅</h1>
        <img className="itemInfoImg" src={currentItems[1].image}></img>
        <h3>{currentItems[1].name.toUpperCase()}</h3>
        <button className="itemInfoButton">USE</button>
        <p>{currentItems[1].description}</p>
      </div>
    </div>
  )
};

export default ItemInfoSidebar;