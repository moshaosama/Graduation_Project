import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./Reducer/Speciality/SpecialityReducer.ts";
import locationReducer from "./Reducer/Location/LocationReducer.ts";
import AreaReducer from "./Reducer/Area/AreaReducer.ts";
import doctorReducer from "./Reducer/Doctor/DoctorReducer.ts";
import allDoctorReducer from "./Reducer/AllDoctor/AllDoctor.ts";
import createMedicineReducer from "./Reducer/MedicineTracker/CreateNewMedicine.ts";
import getMedicinesReducer from "./Reducer/MedicineTracker/getMedicines.ts";
import getMedicineByIdReducer from "./Reducer/MedicineTracker/getMedicineById.ts";
import getReviewsReducer from "./Reducer/Review/getReviewSlice.ts";

export const Store = configureStore({
  reducer: {
    Speciality: specialityReducer,
    Location: locationReducer,
    Area: AreaReducer,
    Doctor: doctorReducer,
    allDoctor: allDoctorReducer,
    createMedicine: createMedicineReducer,
    getMedicine: getMedicinesReducer,
    getMedicineById: getMedicineByIdReducer,
    Reviews: getReviewsReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
