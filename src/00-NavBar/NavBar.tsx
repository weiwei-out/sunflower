import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="NavBar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="portfolio">portfolio</Link>
      </div>
      <div>
        <Link to="about">about</Link>
      </div>
      <div>contact</div>
    </div>
  );
}

export default NavBar;
