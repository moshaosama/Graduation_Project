import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAppointements } from "../Actions/getAppointements";
import { fetchDeleteAppointment } from "../Actions/DeleteAppointment";
const initialState = {
  data: {},
  loading: true,
  error: "",
};

const myAppointementsSlice = createSlice({
  name: "myAppointements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAppointements.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGetAppointements.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchGetAppointements.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchDeleteAppointment.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteAppointment.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDeleteAppointment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});
export default myAppointementsSlice.reducer;
