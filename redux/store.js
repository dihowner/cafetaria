import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './user/authSlice'
import { apiSlice } from './apiSlice'
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
  auth: authReducer,
})
const persistedReducer = persistReducer(
  {
    key: 'root',
    version: 1,
    storage: storage,
  },
  rootReducers
)
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
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
