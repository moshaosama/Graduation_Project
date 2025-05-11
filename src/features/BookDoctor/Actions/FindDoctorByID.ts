import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFindDoctorByID = createAsyncThunk(
  "Doctor/fetchFindDoctorByID",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://graduationprojectserver-production.up.railway.app/findDoctor/${id}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error as string);
    }
  }
);
