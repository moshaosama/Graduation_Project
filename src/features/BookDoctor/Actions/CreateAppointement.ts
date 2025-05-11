import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AppointementData {
  Name: string;
  PhoneNumber: string;
  Email: string;
  DoctorName: string;
  Place: string;
  userId: string;
}

export const fetchCreateAppointement = createAsyncThunk(
  "BookDoctor/fetchCreateAppointement",
  async (data: AppointementData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://graduationprojectserver-production.up.railway.app/create-appointment",
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
