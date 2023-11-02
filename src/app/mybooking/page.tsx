"use client"
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function MyBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const bookItem = useAppSelector((state) => state.reduxPersistReducer.bookSlice.bookItem)

  if (
    !bookItem.firstName &&
    !bookItem.lastName &&
    !bookItem.sid &&
    !bookItem.hospitalName &&
    !bookItem.date
  ) {
    return (
      <div className="m-20">
        <h1 className="text-2xl font-semibold text-gray-700">No Vaccine Booking</h1>
      </div>
    );
  }

  return (
    <div className="m-20">
      <h1 className="text-2xl font-semibold mb-10 text-gray-700">Your booking information</h1>

      <div className="bg-blue-100 p-8 rounded shadow-lg mb-8">
        <p className="mb-4">
          <strong>Firstname:</strong> {bookItem.firstName}
        </p>
        <p className="mb-4">
          <strong>Lastname:</strong> {bookItem.lastName}
        </p>
        <p className="mb-4">
          <strong>SID:</strong> {bookItem.sid}
        </p>
        <p className="mb-4">
          <strong>Hospital Name:</strong> {bookItem.hospitalName}
        </p>
        <p>
          <strong>Date:</strong> {bookItem.date}
        </p>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 shadow-md"
        onClick={() => dispatch(removeBooking(bookItem))}
      >
        Cancel Booking
      </button>
    </div>
  );
}
