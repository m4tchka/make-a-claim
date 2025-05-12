import { signOut } from "firebase/auth";
import { auth } from "../../Firebase.js";
import "./DashboardPage.css";
import { Link } from "react-router";
export default function DashboardPage() {
  return (
    <section className="dashboard-container">
      <>
        <div className="button-group">
          <button className="dashboard-button">Make a New Claim</button>
          <button className="dashboard-button">View Existing Claims</button>
        </div>
        <Link to="/">
          <button
            className="logout-button"
            onClick={async () => {
              await signOut(auth).then(() => {
                console.log("logged out succesfully");
              });
            }}
          >
            Log out
          </button>
        </Link>
      </>
    </section>
  );
}
