import React from "react";

function ChooseYourItems({ archerAvatar, mageAvatar, warriorAvatar }) {

  return (
    <div id="chooseYourAdventurer">
      <h1>ChooseYourItems</h1>
      <div className="center">
          <div className="chooseYourItemContainer">
            <img className="chooseYourItemImg" src={warriorAvatar}></img>
            <p className="chooseYourItemLabel">WARRIOR</p>
          </div>
          <div className="chooseYourItemContainer">
            <img className="chooseYourItemImg" src={archerAvatar}></img>
            <p className="chooseYourItemLabel">ARCHER</p>
          </div>
          <div className="chooseYourItemContainer">
            <img className="chooseYourItemImg" src={mageAvatar}></img>
            <p className="chooseYourItemLabel">MAGE</p>
          </div>
        </div>
    </div>
  )
};

export default ChooseYourItems;