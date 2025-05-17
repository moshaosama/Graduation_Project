import { ReduxData } from "../../../Types/StoreData/ReduxData";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: ReduxData = {
  data: {},
  loading: false,
  error: "",
};

export const fetchSignInWithGoogle = createAsyncThunk(
  "GoogleOAuth/fetchSignInWithGoogle",
  () => {
    fetch(
      "https://graduationprojectserver-production.up.railway.app/auth/google"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }
);

const SignInGoogle = createSlice({
  name: "GoogleOAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignInWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchSignInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSignInWithGoogle.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default SignInGoogle.reducer;
