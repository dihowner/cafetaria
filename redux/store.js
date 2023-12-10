const isClient = typeof window !== 'undefined'

let store
let persistor

if (isClient) {
  const { configureStore, combineReducers } = require('@reduxjs/toolkit')
  const {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
  } = require('redux-persist')
  const storage = require('redux-persist/lib/storage').default
  const { apiSlice } = require('./apiSlice')
  const authSlice = require('@/user/authSlice')

  const rootReducers = combineReducers({
    auth: authSlice,
  })

  const persistConfig = {
    key: 'root',
    storage: typeof window !== 'undefined' ? storage : null,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducers)

  store = configureStore({
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

  persistor = persistStore(store)
} else {

  // Define your server-side store configuration here if needed
}

export { store, persistor }

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
// 'use client'
// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { apiSlice } from './apiSlice'
// import authSlice from '@/user/authSlice'

// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
//   persistStore,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const rootReducers = combineReducers({
//   auth: authSlice,
// })
// const persistConfig = {
//   key: 'root',
//   storage: typeof window !== 'undefined' ? storage : null,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducers)
// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(apiSlice.middleware),

//   devTools: true,
// })
// export const persistor = persistStore(store)