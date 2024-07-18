import "./App.css";
import Page from "./pages/first/Page";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="App"
      style={{ background: "linear-gradient(to right, #ff9999, #0e9fff)" }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
