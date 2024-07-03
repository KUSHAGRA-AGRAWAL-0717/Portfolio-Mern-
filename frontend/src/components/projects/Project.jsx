import Navbar from "../navbar/Navbar";
import "./project.scss";
import React from "react";


const Project = () => {
  return (
    <div>
      <Navbar/>
    <div className="project">
      <div className="top">
        <h1>Projects</h1>
      </div>
      <div className="bottom">
        <div className="list">
          <div className="item">
            <h3>MERN Stack Chat Application with JWT Authentication</h3>
            <div className="inside">
              <a
                href="https://github.com/KUSHAGRA-AGRAWAL-0717/Chat_site-MERN-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    width: "50px",
                    height: "25px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                >
                  Link
                </button>
              </a>
              <span>
                Tech Stack
                <br />
                Frontend: React, Daisy UI, CSS
                <br />
                Backend: Node.js, Express.js
                <br />
                Database: MongoDB
                <br />
                Authentication: JSON Web Tokens (JWT)
              </span>
            </div>
          </div>
          <div className="item">
            <h3>TO-DO FRONTEND APPLICATION BUILD WITH REACTJS
            </h3>
            <div className="inside">
              <a
                href="https://github.com/KUSHAGRA-AGRAWAL-0717/Todo_app-ReactJs-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    width: "50px",
                    height: "25px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                >
                  Link
                </button>
              </a>
              <span>
                Tech Stack
                <br />
                Frontend: React, CSS, JavaScript
                <br />
                State Management: React Hooks
              
              </span>
            </div>
          </div>
          <div className="item">
            <h3>FOOD RECIPE APP BUILT WITH REACTJS
            </h3>
            <div className="inside">
              <a
                href="https://github.com/KUSHAGRA-AGRAWAL-0717/Food_receipe-ReactJs-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    width: "50px",
                    height: "25px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                >
                  Link
                </button>
              </a>
              <span>
                Tech Stack
                <br />
                Frontend: React.js, CSS, JavaScript , 

                <br />
                Data Fetching: Fetch API/Axios for retrieving recipe data
                from external APIs
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Project;
