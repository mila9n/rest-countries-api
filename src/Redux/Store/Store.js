import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from "../Reducer/CountriesReducer";

export const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },
});
