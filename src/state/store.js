import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import contentReducer from "./content.slice";

const rootReducer = combineReducers({
  content: contentReducer,
});

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: defaultMiddleware,
});

export default store;
