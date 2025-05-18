import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetAppointmentById = createAsyncThunk(
  "reschedule/fetchGetAppointmentById",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://graduationprojectserver-production.up.railway.app/delete-appointment/${id}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
);
