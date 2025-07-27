import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PasswordSetup from "./screen/PasswordSetupPage";
import DownloadPage from "./screen/DownloadPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PasswordSetup />} />
        <Route path="/:id/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}
