import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import PaymentDetails from "./components/PaymentDetails";
import Result from "./components/Result";
import { FaUser, FaAddressCard, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { label: "Personal Details", icon: <FaUser /> },
  { label: "Address Details", icon: <FaAddressCard /> },
  { label: "Payment Details", icon: <FaCreditCard /> },
  { label: "Result", icon: <FaCheckCircle /> },
];

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardNumber: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">Multi-Step Form</h1>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              {steps.map((stepItem, index) => (
                <div key={index} className="flex flex-col items-center text-sm font-semibold">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                      index + 1 <= step ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {stepItem.icon}
                  </div>
                  <div className={`mt-2 ${index + 1 <= step ? "text-indigo-600" : "text-gray-400"}`}>
                    {stepItem.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-1 bg-gray-300 rounded-full">
              <div
                className="absolute h-full bg-indigo-600 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${(step / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div>
          {step === 1 && <PersonalDetails nextStep={nextStep} handleChange={handleChange} formData={formData} />}
          {step === 2 && <AddressDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
          {step === 3 && <PaymentDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
          {step === 4 && <Result formData={formData} prevStep={prevStep} />}
        </div>
      </div>
    </div>
  );
}

export default App;
