import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="NavBar">
      <div id="Logo">
        <Link to="/">a/w</Link>
      </div>
      <div id="Tab">
        <div>
          <Link to="portfolio">
            <p className="NavButton">portfolio</p>
          </Link>
        </div>
        <div id="OCD1"></div>

        <div>
          <Link to="about">
            <p id="OCD" className="NavButton">
              about
            </p>
          </Link>
        </div>
        <div id="OCD2"></div>
        <div>
          <p className="NavButton">contact</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
