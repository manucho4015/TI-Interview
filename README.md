# Overview

This is my implementation of a ReactJS application as a solution
to the technical inteview given to me by Touch Inspiration for the role of ReactJS Developer

## Disclaimer

I used Redux Toolkit instead of native Redux. This is because Redux Toolkit is an upgraded version of Redux with much more room for flexibility as well as other features.

## Extra Packages Installed

1. jspdf && => create pdf files
2. jspdf-autotable => create tables within pdf files
3. axios => fetch data from API
4. redux toolkit => state management

## Components

1. Card => Display information fetched from API
2. Form => Submit information for update through API
3. Action => Enable user search by name or by occupation as well as export to PDF
4. Modal => Input preferred pdf filename and download

## Pages

1. Home => Display Card Components
2. EditProfessional => Holds Form Component

## Redux

1. Store instantiated at src/store.js
2. The three main segments connected to state management: - homeSlice => src/features/home/homeSlice.js - formSlice => src/features/form/formSlice.js - modalSlice => src/features/modal/modalSlice.js

The state, reducers, actions and action creators are all handled within each independent segment

#### Connection to API

1. GET endpoint is handled in src/features/home/homeSlice.js

```js
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
```

2. PATCH endpoint is handled in src/features/form/formSlice.js

```js
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
```

#### Thank you for reviewing my application. Hope you enjoyed it :)
