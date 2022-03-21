import React, { useState } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import OneOneChoices from "./Stage 1/OneOneChoices";
import OneOneOptOneResult from "./Stage 1/OneOneOptOneResult";
import OneTwoChoices from "./Stage 1/OneTwoChoices";

function Adventure({ name, avatar, health, attack, defense, luck }) {
  const [optOne, setOptOne] = useState(true)

  function handleClick() {
    setOptOne(optOne => !optOne)
  }

  return (
    <div className="adventurePage">
      <Sidebar 
        name={name}
        avatar={avatar}
        health={health}
        attack={attack}
        defense={defense}
        luck={luck} />
      <div className="adventureMain">
        <Route path="/adventure/1-2">
          <OneTwoChoices />
        </Route>
        <Route path="/adventure/1-1">
          <OneOneChoices />
        </Route>
        <Route path="/adventure/1-1-1">
          <OneOneOptOneResult />
        </Route>
      </div>
    </div>
  )
};

export default Adventure;