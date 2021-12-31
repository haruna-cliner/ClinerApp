import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import todosApi from "../api/todosApi";

const initialState = {
  todos: [],
  loading: false,
};

export const todoFetch = createAsyncThunk(
  "content/todos/fetch",
  async () => await todosApi.get());

const ContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(todoFetch.fulfilled, (state, { payload }) => {
        console.log("Payload", payload);
        state.loading = false;
      })
      .addMatcher(isAnyOf(todoFetch.pending), state => {
        state.loading = true;
      });
  },
});

export default ContentSlice.reducer;
export const contentLoading = state => stae.content.loading;
export const selectTodos = state => state.content.todos;
