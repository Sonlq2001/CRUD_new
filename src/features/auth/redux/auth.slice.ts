import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authApi } from "../api/auth.api";
import { AuthState, FromValue } from "../types/auth.types";

export const postLogin = createAsyncThunk(
  "auth/postLogin",
  async (data: FromValue, { rejectWithValue }) => {
    try {
      const response = await authApi.signIn(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postRegister = createAsyncThunk(
  "auth/postRegister",
  async (data: FromValue, { rejectWithValue }) => {
    try {
      const response = await authApi.register(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: AuthState = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.token;
    });
    builder.addCase(postLogin.rejected, state => {
      state.accessToken = null;
    });

    builder.addCase(postRegister.fulfilled, state => {
      state.accessToken = null;
    });
    builder.addCase(postRegister.rejected, state => {
      state.accessToken = null;
    });
  },
});

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);
