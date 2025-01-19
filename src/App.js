import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
