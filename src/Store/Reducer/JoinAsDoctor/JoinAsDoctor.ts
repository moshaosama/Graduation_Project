import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";

export const fetchJoinAsDoctor = createAsyncThunk(
  "joinAsDoctor/fetchJoinAsDoctor",
  async (data: {
    FirstName: string;
    LastName: string;
    Phone: string;
    Speciality: string;
    City: string;
    Email: string;
    Password: string;
  }) => {
    const response = await axios.post("http://localhost:3000/joinasdoctor", {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Phone: data.Phone,
      Speciality: data.Speciality,
      City: data.City,
      Email: data.Email,
      Password: data.Password,
    });
    return response.data;
  }
);

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

const joinDoctorSlice = createSlice({
  name: "joinAsDoctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJoinAsDoctor.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJoinAsDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchJoinAsDoctor.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default joinDoctorSlice.reducer;
