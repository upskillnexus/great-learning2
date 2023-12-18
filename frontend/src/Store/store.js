import { configureStore } from "@reduxjs/toolkit";
import universitiesSlice from "../Redux/Universities/universities";


export const store = configureStore({
    reducer: universitiesSlice
})