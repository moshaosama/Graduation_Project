import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/Store/ReduxData";
import axios from "axios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const fetchLocation = createAsyncThunk(
  "location/fetchLocation",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/getLocation");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const locationReducer = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchLocation.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default locationReducer.reducer;
