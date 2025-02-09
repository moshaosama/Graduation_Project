import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";

export const fetchArea = createAsyncThunk("Area/fetchArea", async () => {
  const response = await axios.get("http://localhost:3000/getArea");
  return response.data;
});

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

const AreaSlice = createSlice({
  name: "Area",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArea.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArea.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchArea.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default AreaSlice.reducer;
