import "./LandingPage.css";
import { auth, db } from "../../Firebase.js";
import { useState } from "react";
import { Link } from "react-router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser ? true : false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  async function signIn() {
    await signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("Signed in as:", user.email);
      })
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Sign in error:", error.message);
      });
  }
  async function signUp() {
    await createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Created user object",user);
        alert("Registered as: "+ auth.currentUser.email+", please sign in.");
        console.log(auth.currentUser.email);
      })
      .catch((error) => {
        console.error("Sign up error:", error.message);
      });
    await setDoc(doc(db, "users", auth.currentUser.uid), { claims: [] });
  }

  return (
    <>
      <section>
        <h1>Welcome</h1>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
          value={emailInput}
        ></input>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
          value={passwordInput}
        ></input>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => {
            signUp();
          }}
        >
          Sign Up
        </button>

        <div>landingpage</div>
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
        {isLoggedIn ? (
          <p>User: {auth.currentUser.uid}</p>
        ) : (
          <p>No user found</p>
        )}
      </section>
      <button
        onClick={() => {
          signOut(auth);
          setIsLoggedIn(false);
        }}
      >
        Log out
      </button>
    </>
  );
}
