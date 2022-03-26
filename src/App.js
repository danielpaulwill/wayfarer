import React, { useState } from "react"
import './App.css';
import Welcome from "./Setup/Welcome";
import ChooseYourAdventurer from "./Setup/ChooseYourAdventurer";
import Adventure from "./Adventure";
import { Route } from "react-router-dom";

function App() {
  const blankAvatar = "https://lh3.googleusercontent.com/22lQ3KjcE7RwYT8Dmfs1ZkrquCtXCsqM2JP1yn0CTD2RormJwfA5lV8FUah3R4JpW1lVKk9CGKjDP9MIHfxJBrKUrOeEIBSTtDYAhne4ljl2uMCEHVMD38RbZJ3KqCX4LwEKdfrh4V7PPdcsmLoB8hQ1tCagfyXo7MAw4XikCWcykrrvi_yNVSPy3o1nm-mdjARgfL5t_wD5khECIhPCttfD2SGsfqRNP-Bto4z66penbj7raT61pFcQhagE85nmW-gVlBhcCtEAXdBEdkg2qGsPhAvwWMFxMSuP5aiapMxPSEY2BvLy7hpWrarM14-PwnxFjV1-tJpArcbHH3tMChGlGncPb183TGTj8U0ss_KxRvjAvOma_WUewqqOxpScCduFmS3nZRGTKKq6bjFE07QmW5oaWdVumSWXecQMH1sY-25_IFLVxzgme_7bX0tIGDJ7iYqSxnjQn9XZ6LsMAEuLeU-ODU3LbbZF8Ug5uBoeEdaGGHBKwaASblAcbrCzCS7Yc8MBi6YbPRQuxXZYgHziasmutQnswlRJjFUfomO_UGn-w7UQYHAVbJV8dDsNCpCYaqGH1WvQGOjFKpDBBg2zKVxtq___7SofrPj_tAP3DyfSbOe30EEREPF-t_PMSHXWyoJWTFr-9Jjpy76Ro5Mprb658cLw77y6WewyeZuJMieqmjnRyRQ_KGVl37D92UuLlUKIPhqhcnXOuS99jmya85mP5WrnEijsv3iQmZFGPweSomAWGOABfHe0UMQ7ZI_WFrdrr_5NTpBLZijgOMmz_So2PxuqOgaqHhszHpjp7UitQn_VGoo5gFOYNk9ECPzriA=s180-no?authuser=0"
  const maleAvatar = "https://lh3.googleusercontent.com/JwMsZ3R2iHSBjWYQWoIgLBXe1M1rxpCxSb5nB3EuGN83peNvNWib68ydPogl-pILdIwAmk2vlXKljdbc90mWWZzj1xWvbv6UeeAv_VtR1WK_KOaKbExB_AKA2sWX2drp6FhkSYzheINFUrZHj3bczzLuqKTHImYnvCHxqp7Rq-p56o4roZT0xocrH2UtlHR-rSe9OIfl0zTNBl_nezwLvga-VxZs7IWLLq2f817YLo5eLLEmK6oypMsr8LIox8ISCO1O0g1C3WaXCxTvVLXOZjrNq7JdACOafqvTdB9H0oYDuTRxZ7fos85sPBHo8om_fHp__FPYVs2MV3aPUpRrNs7PNSIUAnmlV23uOlRcOzwJCJOoa1al54BPT8NQ2zjgSpYKCXp-jwh9YOsHpu8LgBH-S-LLhckjZqCwpG7TPQ-0HPM0Wfm0MluuITOu2TIUop-VctZhEtzxl0A_w3DOsLrolNoOyeFyKFwYEnVa-oeybiRIXp9Fgrkj3ftlj6NqZxzpgc0WcFTy-_xSU-Uu9Xq_7uqlb0g9M3gTD8DrKeoNsvXNJ_cQkqEzZEBFxWjwIyQAx8xQ555pUszC_7o0PSM9kQ_kmubYHEhQsEF9LgxwtxvDTIk_hGIUfinJkvr_RrujwteauGSJU33O3uQUX4UWDthZiyNK3ioCsutCy73qObbXxf6zspp3y41sL7AMulA3Nc8_5xHftSOTsCzdNJR4WxO0PTPazIEkXtQn_BdGuR2JTI-u4GKi1vHDWZ9RuQfUhksnoKV8xMTBjQOCIs1IpO1aF_ynUjeBenc5wKVb9TafECxU4SYtO2jzrfF8C2zL-A=s180-no?authuser=0"
  const femaleAvatar = "https://lh3.googleusercontent.com/JTgLCFGNgOxQAgtRq7-0huDq0p69bPYNrra_gakGZZSxdctlsXKaALqeB3HW3gU0nSdnCO-3Eu5lvGA_ZEeIouJ6UI8pG8D44c_g14HCjQAa1o-VBhKxHyhcgNqROvzlFJ4qgcuAhkKU7v-d3fS2O5d11WT47S0yoI6qZysDsCkf18tCz9s-H0UXQxvihIjotplXR_bNEufstWB8_JxVcp9iLgxWpsJ2XGYWD5qrDlzWWsoRo6XZ76XRL-2a8zmZPUelNSqneHaWNiKM0aF7OZ1ate48oOz1pWSdnElya7AcLhgdZdfpV1TxKU_twBX-QkpCWqQisq7BlbP7Ijkl_j5H6FlEntidEMc9pL7XU0P7eKJvtPRD70jDBDpVXsL7Y_jAPXH7CouMzp2j1c72YEgKf7QcnRgl_i5l3Ft76bws4Dqhcj-1msUoBpKH8e3f2IsLEqcFboXqQir_IKcfcmzVTkS8TBV2bFgpReEs7cUQBZPkTO7Cd5tFBIe4gJe7LsElfhlypv4X2n7bKbvEPaaZfNRv75fbS1DK2iuPdvUQOkWeD7FSgNWwibVPmRnc4QnGpX5xZeTXpxj94rINPqz8DhXi7noAtbpbXhuvjAjYPhDcnU3K21daAYmIKOKV-Y3WJEgOxm442Ov_zG6_zwjrQsHOfJ4FFGtEwmJkBwQcXHtTM1o8BDMMFwxWG9vNm7Pot6kNR_appTE6Gq4sJfHzEQ8UHuXlPPuMu9MBuZh25O2V9IohLUJMA_aikpS_-SzkmRl67sLh4SeesOu1eJMzKDZYkpPBXAncR6lyzn2J5XzjWSz6bb12fCy-EggMqGZ59g=s180-no?authuser=0"
  const [characterName, setCharacterName] = useState("*your adventurer's name here")
  const [characterAvatar, setCharacterAvatar] = useState(blankAvatar)
  const [health, setHealth] = useState(0)
  const [strength, setStrength] = useState(0)
  const [defense, setDefense] = useState(0)
  const [luck, setLuck] = useState(0)

  // window.onbeforeunload = function() { return "Your work will be lost."; };

  function handleNameChange(e) {
    setCharacterName(e.target.value.toUpperCase())
  }

  function handleAvatarChange(e) {
    if (e.target.src === maleAvatar) {
      setCharacterAvatar(maleAvatar)
      setHealth(100)
      setStrength(35)
      setDefense(30)
      setLuck(25)
    } else if (e.target.src === femaleAvatar) {
      setCharacterAvatar(femaleAvatar)
      setHealth(100)
      setStrength(20)
      setDefense(25)
      setLuck(40)
    }
  }

  function handleDecrementHealth() {
    if (health > 4)
    setHealth(health => health - 5)
  }

  function handleIncrementDefense() {
    if (defense < 96)
    setDefense(defense => defense + 5)
  }

  function handleRandomizeLuck() {
    setLuck(Math.floor(Math.random() * 100))
  }

  return (
    <div>
      <Route path="/setup">
        <ChooseYourAdventurer
          name={characterName}
          handleOnChange={handleNameChange}
          avatar={characterAvatar}
          handleOnClick={handleAvatarChange}
          maleAvatar={maleAvatar}
          femaleAvatar={femaleAvatar}
          health={health}
          strength={strength}
          defense={defense}
          luck={luck} />
      </Route>
      <Route path="/adventure">
        <Adventure
          name={characterName}
          avatar={characterAvatar}
          health={health}
          strength={strength}
          defense={defense}
          luck={luck}
          decrementHealth={handleDecrementHealth}
          incrementDefense={handleIncrementDefense}
          randomizeLuck={handleRandomizeLuck} />
      </Route>
      <Route exact path="/">
        <Welcome />
      </Route>
    </div>
  );
}

export default App;
