'use client'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import authSlice from '@/user/authSlice'

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
// export const persistor = persistStore(store)
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null)
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value)
//     },
//     removeItem(_key) {
//       return Promise.resolve()
//     },
//   }
// }
// const storagee =
//   typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage
