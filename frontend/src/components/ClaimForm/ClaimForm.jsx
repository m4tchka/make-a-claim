import { Link } from "react-router";
import "./ClaimForm.css";
import useForm from "../../customHooks/useForm";

export default function ClaimForm() {
  const { formData, changeFormData, clearFormEntry } = useForm();

  async function handleChange(e) {
    const { name, value } = e.target;
    changeFormData(name, value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Claim submitted successfully!");
    await (() => {
      console.log("async'd");
    });
    clearFormEntry();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="claim-form">
        <h2 className="form-title">Car Insurance Claim Form</h2>
        <div className="form-div">
          <h4>Policy Holder Details</h4>
          <input
            name="policyholderName"
            placeholder="Policyholder Name"
            onChange={handleChange}
            value={formData.policyholderName}
            className="form-input"
            required
          />
          <input
            name="contactPhone"
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.contactPhone}
            className="form-input"
            required
          />
          <input
            name="contactEmail"
            placeholder="Email Address"
            onChange={handleChange}
            value={formData.contactEmail}
            className="form-input"
            required
          />
        </div>
        <div className="form-div">
          <h4>Details of accident</h4>
          <input
            type="date"
            name="accidentDate"
            onChange={handleChange}
            value={formData.accidentDate}
            className="form-input"
            id="date-input"
            required
          />
          <input
            type="time"
            name="accidentTime"
            onChange={handleChange}
            value={formData.accidentTime}
            className="form-input"
          />
          <textarea
            name="accidentLocation"
            placeholder="Accident Location"
            onChange={handleChange}
            value={formData.accidentLocation}
            className="form-input"
            requied="true"
          />
          <textarea
            name="accidentDescription"
            placeholder="Description of accident"
            onChange={handleChange}
            value={formData.accidentDescription}
            className="form-input"
          />
          <textarea
            name="damageDescription"
            placeholder="Description of Damage"
            onChange={handleChange}
            value={formData.damageDescription}
            className="form-input"
            required
          />
          <textarea
            name="injuriesReported"
            placeholder="Injuries Reported (if applicable)"
            onChange={handleChange}
            value={formData.injuriesReported}
            className="form-input"
          />
          <textarea
            name="otherPartyInfo"
            placeholder="Other Party Information (if applicable)"
            onChange={handleChange}
            value={formData.otherPartyInfo}
            className="form-input"
          />
          <select
            name="policeReportFiled"
            onChange={handleChange}
            value={formData.policeReportFiled}
            className="form-input"
          >
            <option value="">Police Report Filed?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <input
            name="policeReportNumber (if applicable)"
            placeholder="Police Report Number"
            onChange={handleChange}
            value={formData.policeReportNumber}
            className="form-input"
          />
        </div>
        <div className="form-div">
          <h4>Driver Details</h4>
          <input
            name="driverName"
            placeholder="Driver Name"
            onChange={handleChange}
            value={formData.driverName}
            className="form-input"
          />
          <input
            name="vehicleMake"
            placeholder="Vehicle Make"
            onChange={handleChange}
            value={formData.vehicleMake}
            className="form-input"
          />
          <input
            name="vehicleModel"
            placeholder="Vehicle Model"
            onChange={handleChange}
            value={formData.vehicleModel}
            className="form-input"
          />
          <input
            name="vehicleYear"
            placeholder="Vehicle Year"
            onChange={handleChange}
            value={formData.vehicleYear}
            className="form-input"
          />
          <input
            name="licensePlate"
            placeholder="License Plate Number"
            onChange={handleChange}
            value={formData.licensePlate}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Claim
        </button>
      </form>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
}
