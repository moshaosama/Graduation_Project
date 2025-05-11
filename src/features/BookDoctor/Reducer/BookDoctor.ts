import { createSlice } from "@reduxjs/toolkit";
import { fetchFindDoctorByID } from "../Actions/FindDoctorByID";
import { fetchCreateAppointement } from "../Actions/CreateAppointement";

const initialState = {
  data: {},
  loading: true,
  error: "",
};

const bookDoctorSlice = createSlice({
  name: "BookDoctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFindDoctorByID.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchFindDoctorByID.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFindDoctorByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchCreateAppointement.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCreateAppointement.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCreateAppointement.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});
export default bookDoctorSlice.reducer;
