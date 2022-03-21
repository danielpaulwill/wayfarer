import { NavLink} from "react-router-dom"

function OneOneOptOneResult() {

  return (
    <div>
        <h1>Stage 1-1</h1>
        <div className="adventureChoices">
          <p>You have learned nothing. Please try again.</p>
          <br></br>
          <NavLink to="/adventure/1-1">
          <button className="choiceButton">Go Back</button>
          </NavLink>
        </div>
    </div>
  )
};

export default OneOneOptOneResult;