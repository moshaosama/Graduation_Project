import { createSlice } from "@reduxjs/toolkit";
import useAxios from "../../../Hooks/useAxios";
import { ReduxData } from "../../../Types/StoreData/ReduxData";

const initialState: ReduxData = {
    loading: true,
    data: {},
    error: "",
  };


  export const fetchGetMedicineProducts = useAxios(
    "medicineProducts/getMedicineProducts",
    "https://graduationprojectserver-production.up.railway.app/get-medicine-product"
  );

  const medicineProductsSlice = createSlice({
    name: "medicineProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchGetMedicineProducts.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchGetMedicineProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchGetMedicineProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Error!";
      });
    },
  });

  export default medicineProductsSlice.reducer;
  
  

