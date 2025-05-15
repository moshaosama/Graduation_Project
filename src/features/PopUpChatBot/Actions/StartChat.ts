import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStartChat = createAsyncThunk(
  "ChatBot/fetchStartChat",
  async (language: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://web-production-d8197.up.railway.app/api/start",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          body: JSON.stringify({ language }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to start chat session");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
