import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ClaimPage from "./components/ClaimPage/ClaimPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/claim" element={<ClaimPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
