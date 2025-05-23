import { createAsyncThunk } from "@reduxjs/toolkit";
import useShareSession from "../Hooks/useShareSession";
export const fetchSendMessage = createAsyncThunk(
  "ChatBot/fetchSendMessage",
  async (data: { message: string }, { rejectWithValue }) => {
    try {
      const { sessionId } = useShareSession();
      const response = await fetch(
        "https://medipulse12-production.up.railway.app/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            message: data.message,
            session_id: sessionId,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "Something went wrong"
      );
    }
  }
);
