import "./ClaimForm.css";
import useForm from "../../customHooks/useForm";

export default function ClaimForm() {
  const { formData, changeFormData, clearFormEntry } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    changeFormData(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Claim submitted successfully!");
    await (() => {
      console.log("async'd");
    });
    clearFormEntry();
  };

  return (
    <form onSubmit={handleSubmit} className="claim-form">
      <h2 className="form-title">Car Insurance Claim Form</h2>

      <input
        name="policyholderName"
        placeholder="Policyholder Name"
        onChange={handleChange}
        value={formData.policyholderName}
        className="form-input"
        required
      />
      <input
        name="contactInfo"
        placeholder="Contact Information"
        onChange={handleChange}
        value={formData.contactInfo}
        className="form-input"
        required
      />

      <input
        type="date"
        name="accidentDate"
        onChange={handleChange}
        value={formData.accidentDate}
        className="form-input"
      />
      <input
        type="time"
        name="accidentTime"
        onChange={handleChange}
        value={formData.accidentTime}
        className="form-input"
      />
      <input
        name="accidentLocation"
        placeholder="Accident Location"
        onChange={handleChange}
        value={formData.accidentLocation}
        className="form-input"
      />
      <textarea
        name="accidentDescription"
        placeholder="Accident Description"
        onChange={handleChange}
        value={formData.accidentDescription}
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
      />

      <input
        name="driverName"
        placeholder="Driver Name"
        onChange={handleChange}
        value={formData.driverName}
        className="form-input"
      />
      <input
        name="driverLicense"
        placeholder="Driver License Number"
        onChange={handleChange}
        value={formData.driverLicense}
        className="form-input"
      />

      <textarea
        name="otherPartyInfo"
        placeholder="Other Party Information"
        onChange={handleChange}
        value={formData.otherPartyInfo}
        className="form-input"
      />
      <textarea
        name="damageDescription"
        placeholder="Description of Damage"
        onChange={handleChange}
        value={formData.damageDescription}
        className="form-input"
      />
      <textarea
        name="injuriesReported"
        placeholder="Injuries Reported"
        onChange={handleChange}
        value={formData.injuriesReported}
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
        name="policeReportNumber"
        placeholder="Police Report Number"
        onChange={handleChange}
        value={formData.policeReportNumber}
        className="form-input"
      />

      <input
        name="signature"
        placeholder="Signature"
        onChange={handleChange}
        value={formData.signature}
        className="form-input"
      />
      <input
        type="date"
        name="submissionDate"
        onChange={handleChange}
        value={formData.submissionDate}
        className="form-input"
      />

      <button type="submit" className="submit-button">
        Submit Claim
      </button>
    </form>
  );
}
