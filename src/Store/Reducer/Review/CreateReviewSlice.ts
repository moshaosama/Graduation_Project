import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const fetchCreateReview = createAsyncThunk(
  "createReview/fetchCreateReview",
  async (data: { Title: string; DoctorId: number; userName: string }) => {
    const response = await axios.post(
      "https://graduationprojectserver-production.up.railway.app/createreview",
      data
    );
    return response.data;
  }
);

const createReviewSlice = createSlice({
  name: "createReview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateReview.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCreateReview.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default createReviewSlice.reducer;
