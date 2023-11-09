
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
const layout = ({ children }) => {
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)
  return (
    <div>
      <Sidebar
        SideBarFirstLinks={clientSideBarFirstLinks}
        SideBarSecondLinks={clientSideBarSecondLinks}
        color='#FF9C06'
      />
      <main className='w-[100%]'>
        <ClientDashboaredHeader
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
          {children}
        </div>
      </main>
    </div>
  )
}

export default layout