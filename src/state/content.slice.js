import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import todosApi from "../api/todosApi";
import flashMessage from "../utils/flashMessage";

const initialState = {
  todos: [],
  loading: false,
};

export const todoFetch = createAsyncThunk(
  "content/todos/fetch",
  async () => {
    let response = await todosApi.get();
    if (!response.ok) return new Promise.reject(response);
    return response.data;
  });

const ContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(todoFetch.fulfilled, (state, { payload }) => {
        state.todos = payload;
        state.loading = false;
      })
      .addCase(todoFetch.rejected, state => {
        flashMessage.danger("Couldn't process request", "Desc...");
        state.loading = false;
      })
      .addMatcher(isAnyOf(todoFetch.pending), state => {
        state.loading = true;
      });
  },
});

export default ContentSlice.reducer;
export const contentLoading = state => state.content.loading;
export const selectTodos = state => state.content.todos;
