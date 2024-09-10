import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import PaymentDetails from "./components/PaymentDetails";
import Result from "./components/Result";

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
