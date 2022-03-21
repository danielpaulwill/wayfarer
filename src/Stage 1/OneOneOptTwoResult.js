import { NavLink} from "react-router-dom"

function OneOneOptTwoResult() {

  return (
    <div>
        <h1>Stage 1-1</h1>
        <div className="adventureChoices">
          <p>You have learned everything there is to learn here..</p>
          <br></br>
          <NavLink to="/adventure/1-2">
          <button className="choiceButton">Proceed</button>
          </NavLink>
        </div>
    </div>
  )
};

export default OneOneOptTwoResult;