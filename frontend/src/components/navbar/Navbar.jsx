import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="search">
          <p>KUSHAGRA</p>
          <p>AGRAWAL</p>
        </div>
      </Link>

      <div className="second">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div className="item">Home</div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="item">About</div>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <div className="item">Projects</div>
        </Link>

        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className="item">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
