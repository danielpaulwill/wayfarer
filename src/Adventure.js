import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
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

  const axe = {
    name: "Axe",
    quantity: 1,
    image: "https://lh3.googleusercontent.com/uOFo1VAumsc7OfxEdYDXwzjYkHE5QMTbNEYePk01jCwBLOyKNiuUXJ-PdS7kS9_kwdV5rBvGrdDiG2IYEH9DIANflymGUOf9Lj4N4UeuFLwznqjMubCL0M87q5T8JR6Xp8LON7qNfW5AslXlJUUhypeEYjYnmZVSLFSIJD2tB6bCNTIUJ8yWhPpx5otsNeOKQUM-jpBXZXC-LarHmQYetAMTMcRW-O7s8PbukySgvjEgYveKXZvpxKBp8rzlHlGKwK5uREjv5uN7wr0MIsWCgsrLAeGS6eBy3TZUh3fxu2_Yw6sOHswSi3Fg_na5Od7Q1MrNHR_yF6ZwCWb7FxXWOZQjNX6YanpiwQ7t_juT0rUFL43GMMI7I2CSO0AkEAqKP1QOUL2i0SMo-wkMuYHJHi5xu1TiWeBOAR075RRLDeTPxDrmUGNZDQDzdYLG9OWHYlRp6JEvoLjcUCJ6gjv0Gq540G0wzcXbjoSwk_GwJrKLEsJBoFlcu4AhenbX7aADyd7kyBJwqd4ezO1fVdxdYjjel4hrPn4NzXn_kpA27p_HILjo1gQRDKPEtFQEyWxbVE-WhT35q3ouBWN1nUBoDWsywPPTK3NlDALN_cP45HBBtomKJ8PPygEIdUqELaIiJOG8rw2xIZrHIG7X1kxRRcAt9B1r0B__kqNYvu3ywUc4Sb1hBnZpnBiauZNKMygRjE1L6pFrsYgOm5Cpsu-iWK3_jDUvpoylSOleL2w12yKhW9q4wWLVn2aLidaquj0qjnPjh5btn51dTGjFuVDebnTNdx_rS-ebSjE=w462-h456-no?authuser=0"
  }

  const potion = {
    name: "Potion",
    quantity: 3,
    image: "https://lh3.googleusercontent.com/wdOoItFjbjKFUCeASwqOB1_1w1AJA2Qpwyr3Y45GHp1VAVI3Omc0QaNZ1atcTvDlUu-sBefuCAL_0gGju5os5sCzlqVBMo4OekAGhH7Mk2XDIF1kh4MRn0p9C8anTEB4_C9evNAe29uekoUw3BB2XnSWxLSU6TPlJ57uaoSJnwNJ0Kih3BaQ6Rxd0ucWPVSMw8MbSBGSqWSERUlB5f4FWN-jcC-tn8OoOrq0ESKPw4WZYteY-ABQY9zVOfNrB9TKLrX8smWrVQEnDlKNhWk8mnGH_Hpf2QVtv2rOReO8VAO-ZMLQ-tdyYorJ-y8PUSMmggEr4LCbEHtKYdnebDvU3suuurQpBabtYWKLTHFP_f3t6RgROz4S7jgG5a560iOA8bgTZR6RXGHSbQyAn4gmsuC34eLLq_Y7XaJ6kocyeYTvdFW1zK7hqdyJxayPkXtYvHs5nZDWyL96yIu98mlofXUFa1Cclb_1w8-3tTJFch52tW2wJoQdYEf0DkR_vTFT4oswHVn7a8FkHVInLv-chOOvtPJ4xAekpZ5fZ-8KTRqYboNwU0duk_QbE4hB3ikjuOl7fDHwZfwyppx5N8Ywk7IjEXKGlEVUPuyTX1V7KgD_KTFlt3lkjW_lvSqyybP7wDhOBJSZhLilkBgm7viFmJ6F2YIzC_inmL7vuMNjDPohCd4S1uTcWHbgl2kF5gmt_F-Gy9aLB6bWcJ3h3LeWXzmnq9qY-L0_2qMw6LpAHC2KSIvf-DBpECevsCjPGuPoA12pcyMbkjqsdDRUSBq_-Q9Cg7WVJUF0aNgTVyLDz7ac1MaTs8NhJcs7X7HTJ6dKCnS9kw=s296-no?authuser=0"
  }

  const treasure = {
    name: "Treasure",
    quantity: 1,
    image: "https://lh3.googleusercontent.com/Io5_m06ovNqKY0bGVL7829XYfCQs0JPJXe_MS8fuXhWDxDGIUYhDqM5PokLcuGFJcBs_D9o_V5HOnfZc5mygCbXDRbKQSXKp6FKIZoSv7otXhWMbVQREI0MyNsyADyZNUy5rPCBdR4HWAMy2cr0vVjkJRbnyUAwd-QrCUsW9XEmtR60JlXN7HKpdd_VepDxZ-P6wJVK4_e7d-tkD-_2MeyU0jY-e5K8x8oslonuOZsjFbujRMTU-IppFTh6bnZ-wd5CM92J9mGCMM075GweHaOpQSFNQLsyuLYsBXSpTYCnjlQ-cAvLtKLqzOrcS66SSPI1Wk1-Xq1HgRWXSe8YoIRWjKEpOQe7o523uDiwwwLq_n3Iey21kFhwTnHvvo4oVrMst-9bjCoi6LiFRL2izOvgoIRCVe1wm8vKuOiw04NrP_DKyCmFB9vbuR-FrBo6TZ0urqCxhYQAlHWBXyrMPz5S9yO84kQ64qolwrEmDh804sy2NrTJFK6Vl0xk7N3Q5DfVEeGqhhX9c7lGUi8hGxAzm7cdeVOh6YmEE6BOgq51DSXkJjJf8aRTmvuuwMIuIrE-tFP_M66At4WRn1xf9TdZlCBOPvTM-tlvnyYvNEPF4gJl-zX1OiNRdNxnX-zWrQc4yx9vu8JjMOCa371mbrcDlPU9weAqpRHQp3G7phshv660ZiMVMdmGhxRtoU1_QCBJ5xKrqy_QZrSwssOuJncdm3en4W2dpT_o6a8WGseva5sOtMJpDHVmMVw-4EE4jBjL0R7HpLjN1hK11iB7ROH7qSgc36yPoCv4=w1016-h938-no?authuser=0"
  }

  const currentItems = [axe, potion, treasure]

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
      </div>
      <RightSidebar 
        name={name}
        avatar={avatar}
        health={health}
        strength={strength}
        defense={defense}
        luck={luck}
        currentItems={currentItems} />
    </div>
  )
};

export default Adventure;