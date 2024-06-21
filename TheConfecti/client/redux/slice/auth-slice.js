// auth-slice.js
import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, { payload: user }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = user;
    },
    loginFailure: (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
