import { useState } from "react";
export default function useForm() {
  const [formData, setFormData] = useState({
    policyholderName: "",
    contactInfo: "",
    policyNumber: "",
    accidentDate: "",
    accidentTime: "",
    accidentLocation: "",
    accidentDescription: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    licensePlate: "",
    driverName: "",
    driverLicense: "",
    otherPartyInfo: "",
    damageDescription: "",
    injuriesReported: "",
    policeReportFiled: "",
    policeReportNumber: "",
    signature: "",
    submissionDate: "",
  });
  function changeFormData(field, value) {
    setFormData({ ...formData, [field]: value });
  }
  function clearFormEntry() {
    setFormData({
      policyholderName: "",
      contactInfo: "",
      policyNumber: "",
      accidentDate: "",
      accidentTime: "",
      accidentLocation: "",
      accidentDescription: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      licensePlate: "",
      driverName: "",
      driverLicense: "",
      otherPartyInfo: "",
      damageDescription: "",
      injuriesReported: "",
      policeReportFiled: "",
      policeReportNumber: "",
      signature: "",
      submissionDate: "",
    });
  }
  return {
    formData,
    changeFormData,
    clearFormEntry,
  };
}
