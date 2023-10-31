import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
    bookItem: BookingItem;
};

const initialState: BookingState = {
    bookItem: {
        firstName: "",
        lastName: "",
        sid: "",
        hospitalName: "",
        date: "",
    }
};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            state.bookItem.firstName = action.payload.firstName;
            state.bookItem.lastName = action.payload.lastName;
            state.bookItem.sid = action.payload.sid;
            state.bookItem.hospitalName = action.payload.hospitalName;
            state.bookItem.date = action.payload.date;
        },
        removeBooking: (state, action:PayloadAction<BookingItem>) => {
            state.bookItem.firstName = "";
            state.bookItem.lastName = "";
            state.bookItem.sid = "";
            state.bookItem.hospitalName = "";
            state.bookItem.date = "";
        }
    },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;