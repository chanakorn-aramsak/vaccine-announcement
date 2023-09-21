"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    nationalID: "",
    hospital: "Chulalongkorn Hospital",
    date: new Date(),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleDateChange = (date: Date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add code here to send the form data to your server or perform other actions.
  };

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-2xl text-black font-semibold mb-4">
        Book a Vaccine Appointment
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            National ID
          </label>
          <input
            type="text"
            name="nationalID"
            value={formData.nationalID}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Hospital
          </label>
          <select
            name="hospital"
            value={formData.hospital}
            onChange={handleSelectChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="Chulalongkorn Hospital">
              Chulalongkorn Hospital
            </option>
            <option value="Rajavithi Hospital">Rajavithi Hospital</option>
            <option value="Thammasat University Hospital">
              Thammasat University Hospital
            </option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Date
          </label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
