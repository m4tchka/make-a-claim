import "./DashboardPage.css"
export default function DashboardPage() {
  return (
    <section className="dashboard-container">
      <>
        <div className="button-group">
          <button className="dashboard-button">Make a New Claim</button>
          <button className="dashboard-button">View Existing Claims</button>
        </div>
        <button className="logout-button">Log out</button>
      </>
    </section>
  );
}
