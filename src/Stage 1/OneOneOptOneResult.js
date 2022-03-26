function OneOneOptOneResult({ handleGoBack, visibility }) {

  return (
    <div>
        <h1>OneOneOptOneResult</h1>
        <div className="adventureChoices">
          <p>You have learned nothing. Please try again.</p>
          <br></br>
          <button className="choiceButton" onClick={handleGoBack} >Go Back</button>
        </div>
    </div>
  )
};

export default OneOneOptOneResult;