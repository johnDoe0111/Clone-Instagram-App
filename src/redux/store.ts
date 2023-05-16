import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./posts/postsSlice";
import autorizationSlice from "./user/autorizationSlice";

const rootReducer = combineReducers({
  autorization: autorizationSlice,
  posts: postsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
