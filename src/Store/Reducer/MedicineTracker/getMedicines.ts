import { createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import { user } from "./CreateNewMedicine";
import useAxios from "../../../Hooks/useAxios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const getAllMedicines = useAxios(
  "getMedicine/getAllMedicines",
  // `https://graduationprojectserver-production.up.railway.app/getMedicines/${user?.id}`
  `http://localhost:3000/getMedicines/${user?.id}`
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
