import { createSlice } from "@reduxjs/toolkit";
import { fetchGetDoctorByName } from "../Actions/GetDoctorByName";

const initialState = {
  data: {},
  error: "",
  loading: false,
};

const GetDoctorSlice = createSlice({
  name: "Doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetDoctorByName.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchGetDoctorByName.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGetDoctorByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch doctor data";
      });
  },
});

export default GetDoctorSlice.reducer;
