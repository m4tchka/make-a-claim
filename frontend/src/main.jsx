import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import ClaimPage from "./components/ClaimPage/ClaimPage.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import DashboardPage from "./components/DashboardPage/DashboardPage.jsx"
import OverviewPage from "./components/OverviewPage/OverviewPage.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/claim" element={<ClaimPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
