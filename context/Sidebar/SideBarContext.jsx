'use client'
import React, { createContext, useReducer, useState } from 'react'
import SideBarReducer from './SideBarReducer'


const SidebarCreateContext = createContext()

const SidebarContext = ({ children }) => {
    const initialState = {
        isSidebarOpen: false,
    }
    const [state, dispatch] = useReducer(SideBarReducer, initialState)

    const toggleSidebar = () => {
        dispatch({ type: 'TOGGLE_SIDEBAR' })
    }
    return (
        <SidebarCreateContext.Provider value={{ ...state, toggleSidebar }}>
            {children}
        </SidebarCreateContext.Provider>
    )
}

export { SidebarContext, SidebarCreateContext }
