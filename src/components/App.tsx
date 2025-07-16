import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Home";
import Login from "./Login";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
