import { createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import useAxios from "../../../Hooks/useAxios";

export const fetchSpeciality = useAxios(
  "Specialty/fetchSpeciality",
  "https://graduationprojectserver-production.up.railway.app/getSpeciality"
);

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

const SpecialityReducer = createSlice({
  name: "Specialty",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpeciality.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchSpeciality.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSpeciality.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default SpecialityReducer.reducer;
