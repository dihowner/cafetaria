'use client'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import authSlice from '@/user/authSlice'
import StatisticSlice from './DashBoard/StatisticSlice'
import withdrawSlice from './Vendor/Slices/withdrawSlice'
// import vendordetailsSlice from './Vendor/Slices/detailsSlice'
import createMealSlice from './Vendor/Slices/createMealSlice'
import BankDetailsSlice from './Vendor/Slices/BankDetailsSlice'
import detailsSlice from './Vendor/Slices/detailsSlice'

const rootReducers = combineReducers({
  auth: authSlice,
  stat: StatisticSlice,
  banks: withdrawSlice,
  Details: detailsSlice,
  meals: createMealSlice,
  bankDetails: BankDetailsSlice,
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
