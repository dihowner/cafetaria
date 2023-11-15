'use client'
import React, { useState } from 'react'
import Header from '@/components/Headerr/Header'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import RegSidebar from '@/components/RegSidebar'
const layout = ({ children }) => {
  // const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)

  return <div>
    {children}</div>
}

export default layout
