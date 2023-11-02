import React, { useContext } from 'react'
import Header from '@/components/Headerr/Header'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
const layout = ({ children }) => {
  // const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default layout
