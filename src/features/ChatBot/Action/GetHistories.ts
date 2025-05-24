import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetHistories = createAsyncThunk(
  "chatBotHistory/fetchGetHistories",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://graduationprojectserver-production.up.railway.app/get-histories/${userId}`
      );

      return response;
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);
