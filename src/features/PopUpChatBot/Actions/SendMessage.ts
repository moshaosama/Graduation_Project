import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSendMessage = createAsyncThunk(
  "ChatBot/fetchSendMessage",
  async (
    data: { message: string; session_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        "https://web-production-d8197.up.railway.app/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          body: JSON.stringify({
            message: data.message,
            session_id: data.session_id,
          }),
        }
      );
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "Something went wrong"
      );
    }
  }
);
