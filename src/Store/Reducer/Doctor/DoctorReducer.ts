import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ReduxData } from "../../../Types/StoreData/ReduxData";

interface DataType {
  Speciality: string;
  City: string;
  Area: string;
}

export const fetchDoctor = createAsyncThunk(
  "Doctor/fetchDoctor",
  async (data: DataType) => {
    try {
      const response = await axios.get(
        "https://graduationprojectserver-production.up.railway.app/findDoctor",
        {
          params: data,
        }
      );
      return response.data;
    } catch (error) {
      console.log("Something went wrong");
    }
  }
);
const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

const doctorSlice = createSlice({
  name: "Doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctor.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDoctor.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default doctorSlice.reducer;
