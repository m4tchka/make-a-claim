import { useState } from "react";
export default function useForm() {
  const formDefaultValues = {
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
  };
  const [formData, setFormData] = useState(formDefaultValues);
  function changeFormData(field, value) {
    setFormData({ ...formData, [field]: value });
  }
  function clearFormEntry() {
    setFormData(formDefaultValues);
  }
  return {
    formDefaultValues,
    formData,
    changeFormData,
    clearFormEntry,
  };
}
