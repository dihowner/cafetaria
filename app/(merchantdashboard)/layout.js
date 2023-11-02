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
import { FaBars } from 'react-icons/fa'
import MHeader from '@/components/Headerr/MHeader'
const layout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)
  return (
    <div>
      <Sidebar
        SideBarFirstLinks={SideBarFirstLinks}
        SideBarSecondLinks={SideBarSecondLinks}
      />
      <main
        className={`  w-[100%] bg-[#FAFAFA] min-h-[100svh] ${
          isSidebarOpen
            ? 'pl-[220px]'
            : 'pl-0 md:pl-[80px] lg:pl-[220px] h-[100%]  '
        }`}
      >
        {/* <FaBars
          className='hidden md:block lg:hidden text-xl '
          onClick={toggleSidebar}
        /> */}
        <MHeader
          SideBarFirstLinks={SideBarFirstLinks}
          SideBarSecondLinks={SideBarSecondLinks}
        />
        <DashboardHeader />
        <div className='p-8 pt-[90px]'>{children}</div>
      </main>
    </div>
  )
}

export default layout
