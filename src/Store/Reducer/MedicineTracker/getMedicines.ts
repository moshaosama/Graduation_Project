import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";
import { user } from "./CreateNewMedicine";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const getAllMedicines = createAsyncThunk(
  "getMedicine/getAllMedicines",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/getMedicines/${user?.id}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const getMedicineSLice = createSlice({
  name: "getMedicine",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMedicines.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllMedicines.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getAllMedicines.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default getMedicineSLice.reducer;
