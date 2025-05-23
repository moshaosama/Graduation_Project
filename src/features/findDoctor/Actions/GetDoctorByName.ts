import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetDoctorByName = createAsyncThunk(
  "Doctor/fetchGetDoctorByName",
  async (Name: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://graduationprojectserver-production.up.railway.app/findDoctorByName/${Name}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);
