import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import postReducer from './postSlice'; // Correct import for the default export

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, postReducer);

export const store = configureStore({
  reducer: persistedReducer, // Use persisted reducer
});

export const persistor = persistStore(store); // Persistor for maintaining state

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;