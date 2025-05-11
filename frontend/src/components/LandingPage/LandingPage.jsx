import "./LandingPage.css";
import { useState } from "react";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <section className="landing-container">
          <div className="button-group">
            <button className="landing-button">Make a New Claim</button>
            <button className="landing-button">View Existing Claims</button>
          </div>
          <button className="logout-button">Log out</button>
        </section>
      ) : (
        <div>notLoggedIn</div>
      )}
    </>
  );
}
