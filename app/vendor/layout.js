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
      <main className='w-[100%]'>
        <MHeader
          SideBarFirstLinks={SideBarFirstLinks}
          SideBarSecondLinks={SideBarSecondLinks}
        />
        <DashboardHeader
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={`${
            isSidebarOpen
              ? 'pl-[220px] w-[100%] bg-[white] min-h-[100svh]'
              : 'pl-0 md:pl-[80px] lg:pl-[220px] pt-[90px] w-[100%] pb-6 bg-[white] min-h-[100svh] '
          }`}
        >
          {/* <FaBars
          className='hidden md:block lg:hidden text-xl '
          onClick={toggleSidebar}
        /> */}

          {children}
        </div>
      </main>
    </div>
  )
}

export default layout
