import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navi">
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        {/* <li>
          <Link to="/Hooks">Hooks</Link>
        </li> */}
        <li>
          <Link to="/First-React-Deployment-Serrano">
            <h1>Vangogh</h1>
          </Link>
        </li>
        <li>
          <Link to="/Work">Recent Works</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        {/* <li>
          <Link to="/HookReducer">Hook Reducer</Link>
        </li> */}
        {/* <li>
          <Link to="/Cart">Cart</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default NavigationBar;
