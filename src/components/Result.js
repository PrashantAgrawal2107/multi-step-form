import React from "react";

const Result = ({ formData, prevStep }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-indigo-500">Submission Result</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Card Number:</strong> {formData.cardNumber}</p>

      <button
        className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500"
        onClick={prevStep}
      >
        Back
      </button>
    </div>
  );
};

export default Result;