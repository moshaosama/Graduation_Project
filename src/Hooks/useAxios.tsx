import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const useAxios = (Name: string, url: string, params?: any) => {
  const data = createAsyncThunk(Name, async () => {
    try {
      const response = await axios.get(url, params);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });
  return data;
};

export default useAxios;
