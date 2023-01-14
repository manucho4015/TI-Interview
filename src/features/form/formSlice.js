import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://touchinspiration-0ada.restdb.io/rest/sample";

const initialState = {
  isLoading: true,
  submitted: false,
  id: "",
  professional: {},
};

export const editProfessional = createAsyncThunk(
  "form/editProfessional",
  async (name, thunkAPI) => {
    try {
      const { form } = thunkAPI.getState();
      const { professional, id } = form;
      const response = await axios.post(`${url}/${id}`, professional, {
        headers: {
          "x-apikey": "63be7360969f06502871ad7f",
        },
      });
      return response.data;
    } catch (error) {}
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    filterProfessional: (state) => {
      const data = JSON.parse(localStorage.getItem("data"));
      let professional = {};
      data.map((item) => {
        if (item._id === state.id) {
          professional = item;
        }
      });
      state.professional = professional;
    },
    editName: (state, action) => {
      const newValue = action.payload;
      state.professional = { ...state.professional, name: newValue };
    },
    editEmail: (state, action) => {
      const newValue = action.payload;
      state.professional = { ...state.professional, email: newValue };
    },
    editOccupation: (state, action) => {
      const newValue = action.payload;
      state.professional = { ...state.professional, occupation: newValue };
    },
    editBio: (state, action) => {
      const newValue = action.payload;
      state.professional = { ...state.professional, bio: newValue };
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: {
    [editProfessional.pending]: (state) => {
      state.isLoading = true;
    },
    [editProfessional.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.submitted = true;
    },
    [editProfessional.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  filterProfessional,
  setId,
  editName,
  editEmail,
  editOccupation,
  editBio,
} = formSlice.actions;

export default formSlice.reducer;
