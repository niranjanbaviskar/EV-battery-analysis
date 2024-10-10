import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BatteryDetailsPage from "./pages/BatteryDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/battery-info" element={<BatteryDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
