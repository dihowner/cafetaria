import { configureStore } from '@reduxjs/toolkit'
import authReducer from './user/authSlice'
import { apiSlice } from './apiSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})