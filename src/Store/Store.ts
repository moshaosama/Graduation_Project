import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./Reducer/Speciality/SpecialityReducer.ts";
import locationReducer from "./Reducer/Location/LocationReducer.ts";
import AreaReducer from "./Reducer/Area/AreaReducer.ts";

export const Store = configureStore({
  reducer: {
    Speciality: specialityReducer,
    Location: locationReducer,
    Area: AreaReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
