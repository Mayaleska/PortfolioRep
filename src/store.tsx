// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice'; // Correct import for the default export

export const store = configureStore({
  reducer: {
    posts: postReducer, // Add the reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;