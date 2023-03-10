import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <Link to={"/"} className="links">
          Home
        </Link>

        <ul>
          <li>
            <Link to={"/star-text-effect"} className="links">
              Star Text
            </Link>
          </li>
          <li>
            <Link to={"/marquee"} className="links">
              Marquee
            </Link>
          </li>
          <li>
            <Link to={"/moving-blob"} className="links">
              Moving Blob
            </Link>
          </li>
          <li>
            <Link to={"/hacker-text"} className="links">
              Hacker Text
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
