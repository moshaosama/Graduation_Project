import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface HistoryData {
  Data: string;
  userId: number;
}

export const fetchCreateHistory = createAsyncThunk(
  "chatBotHistory/fetchCreateHistory",
  async (data: HistoryData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://graduationprojectserver-production.up.railway.app/create-history/${data.userId}`,
        { Data: data.Data }
      );

      return response;
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);
