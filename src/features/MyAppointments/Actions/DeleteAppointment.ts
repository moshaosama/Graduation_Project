import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchDeleteAppointment = createAsyncThunk(
  "myAppointements/deleteAppointment",
  async (appointmentId: number, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://graduationprojectserver-production.up.railway.app/delete-appointment/${appointmentId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);
