'use client'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import authSlice from '@/user/authSlice'

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducers = combineReducers({
  auth: authSlice,
})
const persistConfig = {
  key: 'root',
  storage:  typeof window !== 'undefined' ? storage:null
  
}
const persistedReducer = persistReducer(persistConfig, rootReducers)
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),

  devTools: true,
})
export const persistor = persistStore(store)
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