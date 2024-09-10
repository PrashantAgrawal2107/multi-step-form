import React from "react";
import { useForm } from "react-hook-form";

const PersonalDetails = ({ nextStep, handleChange, formData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => nextStep();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-semibold text-indigo-500">Personal Details</h2>

      <input
        className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400"
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
        onChange={handleChange("name")}
        value={formData.name}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email"
          }
        })}
        placeholder="Email"
        onChange={handleChange("email")}
        value={formData.email}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <button
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90"
        type="submit"
      >
        Next
      </button>
    </form>
  );
};

export default PersonalDetails;
