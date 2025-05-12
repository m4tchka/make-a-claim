import "./LandingPage.css";
import { auth } from "../../firebase.js";
import { useState } from "react";
import { Link } from "react-router";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser ? true : false);
  return (
    <>
      <div>landingpage</div>
      {isLoggedIn && (
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      )}
      {isLoggedIn ? <p>User: {auth.currentUser.uid}</p> : <p>No user found</p>}
    </>
  );
}
