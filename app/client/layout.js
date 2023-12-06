'use client'
import ClientDashboaredHeader from '@/components/ClientDasboard/ClientDashboaredHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import {
  clientSideBarFirstLinks,
  clientSideBarSecondLinks,
} from '@/components/Utilis/Dummy'
import { useContext } from 'react'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import MClientHeader from '@/components/ClientDasboard/MClientHeader'
import ProtectedRouteWrapper from '@/components/ProtectedRouteWrapper'

const layout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)
  return (
    <ProtectedRouteWrapper>
      <Sidebar
        SideBarFirstLinks={clientSideBarFirstLinks}
        SideBarSecondLinks={clientSideBarSecondLinks}
        color='#FF9C06'
      />
      <main className='w-[100%]'>
        <MClientHeader
          SideBarFirstLinks={clientSideBarFirstLinks}
          SideBarSecondLinks={clientSideBarSecondLinks}
          color='#FF9C06'
        />
        <ClientDashboaredHeader
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={`${
            isSidebarOpen
              ? 'pl-[260px] w-[100%] bg-[white] pt-[90px] min-h-[100svh]'
              : 'pl-0 md:pl-[80px] lg:pl-[260px] pt-[90px] w-[100%] pb-6 bg-[white] min-h-[100svh] '
          }`}
        >
          {children}
        </div>
      </main>
    </ProtectedRouteWrapper>
  )
}

export default layout
