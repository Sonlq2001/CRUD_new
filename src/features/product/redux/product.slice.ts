import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import productApi from "./../api/product.api";

import { Todo, initStateTodo } from "./../types/product.types";

export const fetchData = createAsyncThunk("/product/fetch", async () => {
  try {
    const response = await productApi.getAll();
    return response.data;
  } catch (error) {}
});

export const postTodo = createAsyncThunk(
  "/product/post",
  async (todo: Todo) => {
    try {
      const response = await productApi.add(todo);
      return response.data;
    } catch (error) {}
  }
);

export const deleteTodo = createAsyncThunk(
  "/product/delete",
  async (id: string | undefined) => {
    try {
      await productApi.remove(id);
      return id;
    } catch (error) {}
  }
);

export const updateTodo = createAsyncThunk(
  "/product/update",
  async (todo: Todo) => {
    try {
      const response = await productApi.update(todo);
      return response.data;
    } catch (error) {}
  }
);

const initialState: initStateTodo = {
  data: [],
  loading: false,
};

const productSlice = createSlice({
  name: "/product",
  initialState,
  reducers: {
    checkTodo: (state, action) => {
      if (action.payload.name === "checkAll") {
        state.data = state.data.map(item => {
          return { ...item, isChecked: action.payload.checked };
        });
      } else {
        state.data = state.data.map(item => {
          return item.id === action.payload.name
            ? { ...item, isChecked: action.payload.checked }
            : item;
        });
      }
    },
  },
  extraReducers: {
    [fetchData.pending.type]: state => {
      state.loading = true;
    },
    [fetchData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.items;
    },
    [fetchData.rejected.type]: state => {
      state.loading = true;
    },

    [postTodo.fulfilled.type]: (state, action: PayloadAction<Todo>) => {
      state.data.unshift(action.payload);
    },

    [deleteTodo.fulfilled.type]: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },

    [updateTodo.fulfilled.type]: (state, action) => {
      state.data = state.data.map(item =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { checkTodo } = productSlice.actions;

export const productReducer = productSlice.reducer;
