import { useState } from "react";
export default function useForm() {
  const [formData, setFormData] = useState({
    policyholderName: "",
    contactPhone: "",
    contactEmail: "",
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
  });
  function changeFormData(field, value) {
    setFormData({ ...formData, [field]: value });
  }
  function clearFormEntry() {
    setFormData({
      policyholderName: "",
      contactPhone: "",
      contactEmail: "",
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
    });
  }
  return {
    formData,
    changeFormData,
    clearFormEntry,
  };
}
