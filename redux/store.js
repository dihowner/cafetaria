'use client'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import authSlice, { authMiddleware } from '@/user/authSlice'

const rootReducers = combineReducers({
  auth: authSlice,
})
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    rootReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
})
