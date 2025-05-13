import "./ClaimEntry.css";
export default function ClaimEntry({ claimData }) {
  const {
    policyholderName,
    contactPhone,
    contactEmail,
    accidentDate,
    accidentLocation,
    driverName,
    vehicleMake,
    vehicleModel,
    licensePlate,
  } = claimData;
  return (
    <div className="claim-card">
      <div className="claim-header">
        <strong>Outstanding claim by {policyholderName}</strong>
      </div>
      <div className="claim-content">
        <div className="left-column">
          <div>
            {vehicleMake} {vehicleModel} {licensePlate}
          </div>
          <div>Driver: {driverName}</div>
        </div>
        <div className="center-column">
          <div>
            Accident at {accidentLocation} on {accidentDate}
          </div>
        </div>
        <div className="right-column">
          <div>Phone: {contactPhone}</div>
          <div>Email: {contactEmail}</div>
        </div>
      </div>
    </div>
  );
}
