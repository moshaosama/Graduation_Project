import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const fetchAllDoctor = createAsyncThunk(
  "allDoctor/fetchAllDoctor",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/findDoctor/all");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const allDoctorSlice = createSlice({
  name: "allDoctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDoctor.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAllDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllDoctor.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default allDoctorSlice.reducer;
