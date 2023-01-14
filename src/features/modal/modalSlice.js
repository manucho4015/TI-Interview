import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  fileName: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    changeFileName: (state, action) => {
      state.fileName = action.payload;
    },
  },
});

export const { openModal, closeModal, changeFileName } = modalSlice.actions;

export default modalSlice.reducer;
