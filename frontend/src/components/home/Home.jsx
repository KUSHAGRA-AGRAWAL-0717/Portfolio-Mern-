import "./home.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="first">
          <div className="ph">
            <div className="photo"></div>
          </div>
          <div className="icons">
            <a
              href="https://www.instagram.com/kush_agr07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="icon" />
            </a>
            <a
              href="https://github.com/KUSHAGRA-AGRAWAL-0717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/kushagraagrawal017/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="icon" />
            </a>
            <a
              href="https://drive.google.com/file/d/17kp1Y951bXbkeEfJEMXQzphwbVIgXGqe/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AccountCircleIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="second">
          <h1>👋 HI! I am Kushagra Agrawal</h1>
          <p>
            Currently I am learning AI/ML and building skills in data structures{" "}
          </p>
          <p>and algorithms and besides this I am a web developer.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
