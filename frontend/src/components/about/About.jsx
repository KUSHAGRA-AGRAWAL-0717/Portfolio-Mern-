import "./about.scss";

const About = () => {
  return (
    <div>
      <div className="about">
        <div id="one" className="carousel-item">
          <div className="span">
            About me :
            <h4>
              Hey there! I'm an undergraduate student at NIT-J, passionate about
              tech and software development. Here's a glimpse of me:
            </h4>
            <p>
              <h4>💻 Tech Enthusiast: I love exploring new technologies.</h4>
              <h4>
                🌱 Aspiring Developer: On a journey to master software
                development.
              </h4>{" "}
              <h5>🚀 Languages: Proficient in C, C++, and Python.</h5>{" "}
              <h5>
                🛠️ MERN Stack: Building projects with MongoDB, Express.js,
                React, and Node.js.
              </h5>
              <h5>Also Building Skills in Data Structure and Algorithms</h5>
              <h4>
                {" "}
                Feel free to connect—I'm all about creating cool stuff! 😊
              </h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
