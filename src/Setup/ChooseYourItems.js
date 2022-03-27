import React from "react";
import { NavLink } from "react-router-dom";

function ChooseYourItems({ currentItems }) {

  const items = currentItems.map(item => (
    <div className="chooseYourItemContainer" key={item.name} onClick={e => console.log(item.name)}>
      <img className="chooseYourItemImg" src={item.image}></img>
      <p className="chooseYourItemLabel">{item.name.toUpperCase()}</p>
    </div>
    ))

  return (
    <div id="chooseYourAdventurer">
      <h1>ChooseYourItems</h1>
      <p>Choose up to 1 weapon below</p>
      <div className="itemGroupContainer">
          {items}
      </div>
      <p>Choose up to 3 items below</p>
      <div className="itemGroupContainer">
          {items}
      </div>
      <div className="center">
          <NavLink to="/adventure">
            <button id="chooseAdventureButton">Confirm your items</button>
          </NavLink>
        </div>
    </div>
  )
};

export default ChooseYourItems;