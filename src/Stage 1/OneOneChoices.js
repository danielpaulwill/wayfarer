function OneOneChoices({ onChoiceClick, isVisibleOne }) {

  return (
    <div>
        <h1>OneOneChoices</h1>
        <div className="adventureChoices">
          <p>If you had four choices, which one would you choose?</p>
          <br></br>
          {isVisibleOne.current ? <button className="choiceButton" onClick={e => onChoiceClick(1)}>Choice 1</button> : null}
          <button className="choiceButton" onClick={e => onChoiceClick(2)}>Choice 2</button>
          <button className="choiceButton" onClick={e => onChoiceClick(3)}>Choice 3</button>
          <button className="choiceButton" onClick={e => onChoiceClick(4)}>Choice 4</button>
        </div>
    </div>
  )
};

export default OneOneChoices;