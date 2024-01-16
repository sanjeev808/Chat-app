// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API login function for illustration purposes
const apiLogin = async (credentials) => {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
 return { token: data.data.token, };
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    const response = await apiLogin(credentials);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        // state.user = action.payload.user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
