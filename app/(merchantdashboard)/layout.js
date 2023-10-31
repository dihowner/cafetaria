'use client'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import {
  SideBarFirstLinks,
  SideBarSecondLinks,
} from '@/components/Utilis/Dummy'
import DashboardHeader from '@/components/DashboardHeader'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import { useContext } from 'react'
const layout = ({children}) => {
   const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)
  return (
    <div>
      <Sidebar
        SideBarFirstLinks={SideBarFirstLinks}
        SideBarSecondLinks={SideBarSecondLinks}
      />
      <main
        className={`  w-[100%] ${
          isSidebarOpen
            ? 'pl-[220px]'
            : 'pl-0 md:pl-[80px] lg:pl-[220px] h-[100%] '
        }`}
      >
        <DashboardHeader />
        {children}
      </main>
    </div>
  )
}

export default layout
