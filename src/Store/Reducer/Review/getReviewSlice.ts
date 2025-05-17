import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const fetchgetReviews = createAsyncThunk(
  "getReview/fetchgetReviews",
  async (id: number) => {
    if (id) {
      const response = await axios.get(
        `https://graduationprojectserver-production.up.railway.app/getreview/${id}`
      );
      return response.data;
    }
  }
);

const getReviewSlice = createSlice({
  name: "getReview", // Get Review
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchgetReviews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchgetReviews.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchgetReviews.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default getReviewSlice.reducer;
