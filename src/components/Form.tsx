"use client";
import { Select, MenuItem, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../interfaces";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Form() {
  const dispatch = useDispatch<AppDispatch>();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [sid, setSid] = useState<string>("");
  const [hospitalName, setHospitalName] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);

  const makeReservation = () => {
    if (
      firstName &&
      lastName &&
      sid &&
      hospitalName &&
      dayjs(date).format("DD/MM/YYYY")
    ) {
      const booking: BookingItem = {
        firstName: firstName,
        lastName: lastName,
        sid: sid,
        hospitalName: hospitalName,
        date: dayjs(date).format("DD/MM/YYYY"),
      };
      dispatch(addBooking(booking));
    } else {
      alert("Please fill in all information");
    }
  };

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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              fullWidth
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="id-card"
              label="ID Card Number"
              variant="outlined"
              fullWidth
              placeholder="Your ID card"
              value={sid}
              onChange={(e) => setSid(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="hospital-select"
              label="Select Hospital"
              select
              variant="outlined"
              fullWidth
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
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
              <DatePicker
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end">
          <Link href="/mybooking">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300"
            onClick={makeReservation}
          >
            Submit
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
