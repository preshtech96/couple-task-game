import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import Nav from "./components/Nav";
import Gameinstrution from "./components/Gameinstrution";

const App = () => {
  return (
    <div>
      {/* < Home />  */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Gameinstrution" element={<Gameinstrution />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
