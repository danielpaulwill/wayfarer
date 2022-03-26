function OneOneOptTwoResult({ handleOnToTwo }) {

  return (
    <div>
        <h1>OneOneOptTwoResult</h1>
        <div className="adventureChoices">
          <p>You have learned everything there is to learn here..</p>
          <br></br>
          <button className="choiceButton" onClick={handleOnToTwo}>Proceed</button>
        </div>
    </div>
  )
};

export default OneOneOptTwoResult;