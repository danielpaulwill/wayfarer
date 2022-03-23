import React, { useState } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import OneOneChoices from "./Stage 1/OneOneChoices";
import OneOneOptOneResult from "./Stage 1/OneOneOptOneResult";
import OneOneOptTwoResult from "./Stage 1/OneOneOptTwoResult";
import OneTwoChoices from "./Stage 1/OneTwoChoices";

function Adventure({ name, avatar, health, attack, defense, luck, decrementHealth, incrementDefense, randomizeLuck, choicesPage, handleNextPage }) {
  const [optOneIsVisible, setOptOneIsVisible] = useState(true)

  function handleOptOneClick() {
    setOptOneIsVisible(optOneIsVisible => !optOneIsVisible)
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
        {/* {choicesPage} */}
        <Route path="/adventure/1-2">
          <OneTwoChoices decrementHealth={decrementHealth} incrementDefense={incrementDefense} randomizeLuck={randomizeLuck} />
        </Route>
        <Route path="/adventure/1-1">
          <OneOneChoices optOneIsVisible={optOneIsVisible} handleOptOneClick={handleOptOneClick} />
        </Route>
        <Route path="/adventure/1-1-1">
          <OneOneOptOneResult />
        </Route>
        <Route path="/adventure/1-1-2">
          <OneOneOptTwoResult />
        </Route>
      </div>
    </div>
  )
};

export default Adventure;