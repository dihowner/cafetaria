'use client'
import React, { useState } from 'react'
import Header from '@/components/Headerr/Header'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import RegSidebar from '@/components/RegSidebar'
import UnprotectedRouter from '@/components/UnprotectedRouter'
const layout = ({ children }) => {
  // const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)

  return (
    <div>
      <UnprotectedRouter>
      {children}
      </UnprotectedRouter>
    </div>
  )
}

export default layout
