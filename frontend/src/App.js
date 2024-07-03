import "./App.css"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Project from "./components/projects/Project";
import Page from "./pages/first/Page";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/">
          <Route index element={<Page/>}/>
          <Route path="home" element={<Home/>}></Route>
          <Route path="projects" element={<Project/>}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
