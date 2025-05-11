import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAppointements } from "../Actions/getAppointements";

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
  },
});
export default myAppointementsSlice.reducer;
