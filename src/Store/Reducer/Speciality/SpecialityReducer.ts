import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ReduxData } from "../../../Types/StoreData/ReduxData";

export const fetchSpeciality = createAsyncThunk(
  "Specialty/fetchSpeciality",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/getSpeciality");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

const SpecialityReducer = createSlice({
  name: "Specialty",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpeciality.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchSpeciality.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSpeciality.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default SpecialityReducer.reducer;
