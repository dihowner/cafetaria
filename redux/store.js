'use client'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import authSlice from '@/user/authSlice'
import StatisticSlice from './DashBoard/StatisticSlice'
import withdrawSlice from './Vendor/Slices/withdrawSlice'

const rootReducers = combineReducers({
  auth: authSlice,
  stat: StatisticSlice,
  banks: withdrawSlice,
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
