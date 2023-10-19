"use client";
import React from "react";
import { Typography } from "@mui/material";
import { MenuItem, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Form = () => {
  return (
    <div className="container mx-auto p-4">
      <Typography variant="h6" className="text-gray-600 mb-4">
        Please provide your information
      </Typography>
      <form>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              fullWidth
              placeholder="Your first name"
              className="w-full"
            />
          </div>
          <div>
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              fullWidth
              placeholder="Your last name"
              className="w-full"
            />
          </div>
          <div>
            <TextField
              id="id-card"
              label="ID Card Number"
              variant="outlined"
              fullWidth
              placeholder="Your ID card"
              className="w-full"
            />
          </div>
          <div>
            <TextField
              id="hospital-select"
              label="Select Hospital"
              select
              variant="outlined"
              fullWidth
              defaultValue="Chulalongkorn Hospital"
              className="w-full"
            >
              <MenuItem value="Chulalongkorn Hospital">
                Chulalongkorn Hospital
              </MenuItem>
              <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
              <MenuItem value="Thammasat University Hospital">
                Thammasat University Hospital
              </MenuItem>
            </TextField>
          </div>
          <div>
            <Typography variant="body1" className="mb-2">
              Please select the day you want to get the vaccine
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
              hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
