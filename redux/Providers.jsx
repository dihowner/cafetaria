"use client"
import React from 'react'
import { persistor, store } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null} >
                {children}
            </PersistGate>
        </Provider>
    )
}

export default Providers