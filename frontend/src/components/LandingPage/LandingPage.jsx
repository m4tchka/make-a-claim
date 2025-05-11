import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing-container">
      <div className="button-group">
        <button className="landing-button">Make a New Claim</button>
        <button className="landing-button">View Existing Claims</button>
      </div>
      <button className="logout-button">Log out</button>
    </section>
  );
}