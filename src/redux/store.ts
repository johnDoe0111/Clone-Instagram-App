import { configureStore, combineReducers } from "@reduxjs/toolkit";
import autorizationSlice from "./user/autorizationSlice";

const rootReducer = combineReducers({
  autorization: autorizationSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
