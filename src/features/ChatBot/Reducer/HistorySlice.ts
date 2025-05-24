import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateHistory } from "../Action/CreateHistory";
import { fetchGetHistories } from "../Action/GetHistories";

const initialState = {
  History: {},
  error: "",
  loading: false,
};

const chatBotHistorySlice = createSlice({
  name: "chatBotHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateHistory.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCreateHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.History = action.payload;
      })
      .addCase(fetchCreateHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch doctor data";
      })
      .addCase(fetchGetHistories.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchGetHistories.fulfilled, (state, action) => {
        state.loading = false;
        state.History = action.payload;
      })
      .addCase(fetchGetHistories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch doctor data";
      });
  },
});

export default chatBotHistorySlice.reducer;
