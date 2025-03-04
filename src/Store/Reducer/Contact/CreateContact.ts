import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxData } from "../../../Types/StoreData/ReduxData";
import axios from "axios";

const initialState: ReduxData = {
  loading: true,
  data: {},
  error: "",
};

export const fetchCreateContact = createAsyncThunk(
  "createContact/fetchCreateContact",
  async (data: { Name: string; Email: string; Comment: string }) => {
    const response = await axios.post("http://localhost:3000/createcontact", {
      Name: data.Name,
      Email: data.Email,
      Comment: data.Comment,
    });
    return response.data;
  }
);

const CreateContact = createSlice({
  name: "createContact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateContact.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCreateContact.rejected, (state) => {
      state.loading = false;
      state.error = "Error!";
    });
  },
});

export default CreateContact.reducer;
