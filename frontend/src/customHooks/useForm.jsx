import { useState } from "react";
export default function useForm() {
  const [formData, setFormData] = useState({
    policyholderName: "",
    contactPhone: "",
    contactEmail: "",
    accidentDate: "",
    accidentTime: "",
    accidentLocation: "",
    accidentDescription: "",
    damageDescription: "",
    injuriesReported: "",
    otherPartyInfo: "",
    policeReportFiled: "",
    policeReportNumber: "",
    driverName: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    licensePlate: "",
  });
  function changeFormData(field, value) {
    setFormData({ ...formData, [field]: value });
  }
  function clearFormEntry() {
    setFormData({
      policyholderName: "",
      contactPhone: "",
      contactEmail: "",
      accidentDate: "",
      accidentTime: "",
      accidentLocation: "",
      accidentDescription: "",
      damageDescription: "",
      injuriesReported: "",
      otherPartyInfo: "",
      policeReportFiled: "",
      policeReportNumber: "",
      driverName: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      licensePlate: "",
    });
  }
  return {
    formData,
    changeFormData,
    clearFormEntry,
  };
}
