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
import medicineProductsReducer from "./Reducer/MedicineProducts/getMedicineProducts.ts";
import bookDoctorReducer from "../features/BookDoctor/Reducer/BookDoctor.ts";
import ChatBotReducer from "../features/PopUpChatBot/Reducer/ChatBotReducer.ts";
import {
  myAppointementsReducer,
  rescheduleReducer,
} from "../features/MyAppointments/Reducer/myAppointements.ts";
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
    medicineProducts: medicineProductsReducer,
    DoctorByID: bookDoctorReducer,
    myAppointements: myAppointementsReducer,
    ChatBot: ChatBotReducer,
    AppointmentByID: rescheduleReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
