import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// redux state
const initialState = {
  professionalsArray: [],
  total: 0,
  isLoading: true,
  name: "",
  profession: "",
  id: "",
  searchArray: [],
};

// connect to API
const url = "https://touchinspiration-0ada.restdb.io/rest/sample";

export const getProfessionals = createAsyncThunk(
  "home/getProfessionals",
  async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          "x-apikey": "63be7360969f06502871ad7f",
        },
      });
      localStorage.setItem("data", JSON.stringify(response.data));
      return response.data;
    } catch (error) {}
  }
);

// redux actions, action creators & reducer
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    calculateTotal: (state) => {
      let total = 0;
      state.professionalsArray.forEach(() => {
        total += 1;
      });
      state.total = total;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeProfession: (state, action) => {
      state.profession = action.payload;
    },
    setId: (state, action) => {
      console.log(action.payload);
      state.id = action.payload;
    },
    searchName: (state) => {
      const data = JSON.parse(localStorage.getItem("data"));
      let searchArray = [];
      data.map((professional) => {
        if (
          professional.name.toUpperCase().includes(state.name.toUpperCase())
        ) {
          searchArray.push(professional);
        }
        return null;
      });
      state.professionalsArray = searchArray;
    },
    searchProfession: (state) => {
      const data = JSON.parse(localStorage.getItem("data"));
      let searchArray = [];
      data.map((professional) => {
        if (
          professional.occupation
            .toUpperCase()
            .includes(state.profession.toUpperCase())
        ) {
          searchArray.push(professional);
        }
        return null;
      });
      state.professionalsArray = searchArray;
    },
  },
  extraReducers: {
    [getProfessionals.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfessionals.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.professionalsArray = action.payload;
    },
    [getProfessionals.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  calculateTotal,
  searchName,
  searchProfession,
  changeName,
  changeProfession,
  setId,
} = homeSlice.actions;

export default homeSlice.reducer;
