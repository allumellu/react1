import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div>
        <nav>
          <div className="Headeralignment">
            <Link to="/">Home</Link>

            <Link to="/Createaccount">Createaccount</Link>

            <Link to="/Signinaccount">Signinaccount</Link>

            <Link to="/About">About</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
