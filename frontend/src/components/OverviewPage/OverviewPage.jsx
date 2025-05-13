import { useState, useEffect } from "react";
import { db, auth } from "../../Firebase.js";
import { doc, getDoc } from "firebase/firestore";
import ClaimEntry from "../ClaimEntry/ClaimEntry.jsx";
import "./OverviewPage.css";
import { Link } from "react-router";
export default function OverviewPage() {
  const [userClaims, setUserClaims] = useState([]);
  async function loadDocs() {
    const currentUserDocRef = doc(db, "users", auth.currentUser.uid);
    const userDoc = await getDoc(currentUserDocRef);
    console.log(userDoc.data());
    setUserClaims(userDoc.data().claims);
  }
  useEffect(() => {
    loadDocs();
  }, []);
  return (
    <div className="claim-list-wrapper">
      <div className="claim-list-container">
        {userClaims.map((claim, index) => (
          <div className="claim-entry-wrapper" key={index}>
            <ClaimEntry claimData={claim} />
          </div>
        ))}
      </div>
      <Link to="/dashboard">
        <button className="back-button">
          Back
        </button>
      </Link>
    </div>
  );
}
