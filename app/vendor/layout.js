'use client'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import {
  SideBarFirstLinks,
  SideBarSecondLinks,
} from '@/components/Utilis/Dummy'
import DashboardHeader from '@/components/MerchantDashboard/DashboardHeader'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import MHeader from '@/components/MerchantDashboard/MHeader'
import ProtectedRouteWrapper from '@/components/ProtectedRouteWrapper'
const layout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)
  return (
    <div>
      <ProtectedRouteWrapper>
        <Sidebar
          SideBarFirstLinks={SideBarFirstLinks}
          SideBarSecondLinks={SideBarSecondLinks}
          color='#218B07'
        />
        <main className='w-[100%]'>
          <MHeader
            SideBarFirstLinks={SideBarFirstLinks}
            SideBarSecondLinks={SideBarSecondLinks}
            color='#218B07'
          />
          <DashboardHeader
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <div
            className={`${
              isSidebarOpen
                ? 'pl-[260px] w-[100%] bg-[white] min-h-[100svh] pt-[90px]'
                : 'pl-0 md:pl-[80px] lg:pl-[260px] pt-[90px] w-[100%] pb-6 bg-[white] min-h-[100svh] '
            }`}
          >
            {/* <FaBars
          className='hidden md:block lg:hidden text-xl '
          onClick={toggleSidebar}
        /> */}

            {children}
          </div>
        </main>
      </ProtectedRouteWrapper>
    </div>
  )
}

export default layout
