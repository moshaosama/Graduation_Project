import { createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import useAxios from "../../../Hooks/useAxios";

export const fetchLocation = useAxios(
  "location/fetchLocation",
  "http://localhost:3000/getLocation"
);
const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

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
