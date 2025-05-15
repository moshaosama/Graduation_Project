import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export interface DataMedicine {
  Name: string;
  Description: string;
}

export const user = JSON.parse(window.localStorage.getItem("User")!);

export const createNewMedicine = createAsyncThunk(
  "createMedicine/createNewSlice",
  async ({ Name, Description }: DataMedicine) => {
    try {
      const response = await axios.post(
        // "https://graduationprojectserver-production.up.railway.app/create_new_medicine",
        "http://localhost:3000/create_new_medicine",
        {
          userId: user?.id,
          Name,
          Description,
        }
      );
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const createMedicineSlice = createSlice({
  name: "createMedicine",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNewMedicine.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createNewMedicine.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(createNewMedicine.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default createMedicineSlice.reducer;
