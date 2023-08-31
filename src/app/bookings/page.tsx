"use client"; 
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'General Checkup',
    date: new Date(),
    time: '09:00 AM',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    console.log('Form data submitted:', formData);
  };
  



  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-2xl text-black font-semibold mb-4">Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="General Checkup">General Checkup</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Consultation">Consultation</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Date</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
          </select>
        </div>

        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
