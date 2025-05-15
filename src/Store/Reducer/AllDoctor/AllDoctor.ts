import { createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";

import useAxios from "../../../Hooks/useAxios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const fetchAllDoctor = useAxios(
  "allDoctor/fetchAllDoctor",
  // "https://graduationprojectserver-production.up.railway.app/findDoctor/all"
  "http://localhost:3000/findDoctor/all"
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
