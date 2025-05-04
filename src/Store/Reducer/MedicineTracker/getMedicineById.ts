import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const fetchMedicineById = createAsyncThunk(
  "medicineById/fetchMedicineById",
  async (id?: any) => {
    try {
      const response = await axios.get(
        `https://graduationprojectserver-production.up.railway.app/getMedicineById/${id}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const getMedicineByIdSlice = createSlice({
  name: "medicineById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMedicineById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMedicineById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMedicineById.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default getMedicineByIdSlice.reducer;
