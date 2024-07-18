import "./navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="container">
      <Link
        to="home"
        smooth={true}
        duration={500}
        style={{ textDecoration: "none" }}
      >
        <div className="search">
          <p>KUSHAGRA</p>
          <p>AGRAWAL</p>
        </div>
      </Link>

      <div className="second">
        <Link
          to="home"
          smooth={true}
          duration={500}
          style={{ textDecoration: "none" }}
        >
          <div className="item">Home</div>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          style={{ textDecoration: "none" }}
        >
          <div className="item">About</div>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          style={{ textDecoration: "none" }}
        >
          <div className="item">Projects</div>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          style={{ textDecoration: "none" }}
        >
          <div className="item">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
