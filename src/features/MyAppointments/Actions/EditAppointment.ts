import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface EditAppointmentData {
  id: number;
  Name: string;
  PhoneNumber: number;
  Email: string;
}
export const fetchEditAppointment = createAsyncThunk(
  "myAppointements/fetchEditAppointment",
  async (data: EditAppointmentData, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://graduationprojectserver-production.up.railway.app/delete-appointment/${data.id}`,
        data
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
);
