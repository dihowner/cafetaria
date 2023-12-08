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
// import storage from 'redux-persist/lib/storage'
import createwebstorage from 'redux-persist/lib/storage/createwebstorage'
const createnoopstorage = () => {
  return {
    getitem(_key) {
      return promise.resolve(null)
    },
    setitem(_key, value) {
      return promise.resolve(value)
    },
    removeitem(_key) {
      return promise.resolve()
    },
  }
}
const storage =
  typeof window !== 'undefined'
    ? createwebstorage('local')
    : createnoopstorage()
const rootReducers = combineReducers({
  auth: authSlice,
})
const persistConfig = {
  key: 'root',
  storage,
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
