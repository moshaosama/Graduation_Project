import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetAppointements = createAsyncThunk(
  "myAppointements/fetchGetAppointements",
  async (userId: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://graduationprojectserver-production.up.railway.app/get-appointment?userId=${userId}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
