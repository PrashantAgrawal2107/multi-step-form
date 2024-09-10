import React from "react";
import { useForm } from "react-hook-form";

const AddressDetails = ({ nextStep, prevStep, handleChange, formData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => nextStep();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-semibold text-indigo-500">Address Details</h2>

      <input
        className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400"
        {...register("address", { required: "Address is required" })}
        placeholder="Address"
        onChange={handleChange("address")}
        value={formData.address}
      />
      {errors.address && <p className="text-red-500">{errors.address.message}</p>}

      <input
        className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400"
        {...register("city", { required: "City is required" })}
        placeholder="City"
        onChange={handleChange("city")}
        value={formData.city}
      />
      {errors.city && <p className="text-red-500">{errors.city.message}</p>}

      <div className="flex justify-between">
        <button
          type="button"
          className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-6 rounded-lg font-semibold hover:opacity-90"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default AddressDetails;
