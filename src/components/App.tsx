import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HomePage, LoginPage } from "../pages";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
