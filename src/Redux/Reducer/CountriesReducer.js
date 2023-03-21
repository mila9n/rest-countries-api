import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "",
  pageNumber: 0,
};

export const countriesSlice = createSlice({
  name: "Countries",
  initialState,
  reducers: {
    changeRegion: (state, action) => {
      state.region = action.payload.region;
    },
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload.number;
    },
  },
});

export const { changeRegion, changePageNumber } = countriesSlice.actions;

export default countriesSlice.reducer;
