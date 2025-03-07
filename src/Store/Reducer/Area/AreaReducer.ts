import { createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import useAxios from "../../../Hooks/useAxios";

export const fetchArea = useAxios(
  "Area/fetchArea",
  "http://localhost:3000/getArea"
);

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
