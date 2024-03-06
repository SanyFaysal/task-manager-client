import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.user = {};
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
  },
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
