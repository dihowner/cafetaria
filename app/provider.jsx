"use client"
import React from 'react'
// import { persistor, store } from './store'
import { store } from '../redux/store'
import { Provider } from 'react-redux'


const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            {/* <PersistGate persistor={persistor} loading={null} > */}
            {children}
            {/* </PersistGate> */}
        </Provider>
    )
}

export default Providers
