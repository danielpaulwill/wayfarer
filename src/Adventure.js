import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import OneOneChoices from "./Stage 1/OneOneChoices";
import OneOneOptOneResult from "./Stage 1/OneOneOptOneResult";
import OneOneOptTwoResult from "./Stage 1/OneOneOptTwoResult";
import OneTwoChoices from "./Stage 1/OneTwoChoices";

function Adventure({ name, avatar, health, strength, defense, luck, decrementHealth, incrementDefense, randomizeLuck }) {

  const isVisibleOne = useRef(true)
  // const isVisibleTwo = useRef(true) -- another useRef to get rid of a button

  const oneOneChoice = <OneOneChoices onChoiceClick={handleOneOneChoiceClick} isVisibleOne={isVisibleOne} />
  const [choicesPage, setChoicesPage] = useState(oneOneChoice)
  
  const oneOneOneResult = <OneOneOptOneResult handleGoBack={handleOneOneOneGoBack} />
  const oneOneTwoResult = <OneOneOptTwoResult handleOnToTwo={handleOnToTwo} />
  const oneOneThreeResult = null
  const oneOneFourResult = null
  const oneTwoChoice = <OneTwoChoices decrementHealth={decrementHealth} incrementDefense={incrementDefense} randomizeLuck={randomizeLuck} />
  
  function handleOptOneIsVisible() {
    isVisibleOne.current = false
  }
  
  function handleOneOneChoiceClick(num) {
    if (num === 1) {
      handleOptOneIsVisible()
      setChoicesPage(oneOneOneResult)
    } else {setChoicesPage(oneOneTwoResult)}
  }

  function handleOnToTwo() {
    setChoicesPage(oneTwoChoice)
    }

  function handleOneOneOneGoBack() {
    setChoicesPage(oneOneChoice)
  }

  return (
    <div className="adventurePage">
      <Sidebar 
        name={name}
        avatar={avatar}
        health={health}
        strength={strength}
        defense={defense}
        luck={luck} />
      <div className="adventureMain">
        {choicesPage}
        {/* <Route path="/adventure/1-2"> */}
          {/* <OneTwoChoices decrementHealth={decrementHealth} incrementDefense={incrementDefense} randomizeLuck={randomizeLuck} /> */}
        {/* </Route> */}
        {/* <Route path="/adventure/1-1"> */}
          {/* <OneOneChoices optOneIsVisible={optOneIsVisible} handleOptOneClick={handleOptOneClick} /> */}
        {/* </Route>
        <Route path="/adventure/1-1-1">
          <OneOneOptOneResult />
        </Route>
        <Route path="/adventure/1-1-2">
          <OneOneOptTwoResult />
        </Route> */}
      </div>
    </div>
  )
};

export default Adventure;