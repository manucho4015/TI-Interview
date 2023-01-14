import { configureStore } from "@reduxjs/toolkit";

// import reducers
import homeReducer from "./features/home/homeSlice";
import formReducer from "./features/form/formSlice";
import modalReducer from "./features/modal/modalSlice";

// create redux store
export const store = configureStore({
  reducer: {
    home: homeReducer,
    form: formReducer,
    modal: modalReducer,
  },
});
