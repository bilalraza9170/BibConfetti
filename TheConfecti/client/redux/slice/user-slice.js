import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    requestLogin: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.data = null;
    },
  },
});

export const { requestLogin, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
