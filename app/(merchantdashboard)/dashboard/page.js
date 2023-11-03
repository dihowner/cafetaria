'use client'
import Chat from '@/components/MerchantDashboard/Dashboard/Chat'
import Graph from '@/components/MerchantDashboard/Dashboard/Graph'
import Table from '@/components/MerchantDashboard/Dashboard/Table'
import TopSideBar from '@/components/MerchantDashboard/Dashboard/TopSideBar'

import React from 'react'

const page = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <TopSideBar />
      <Table />
      <div className='flex flex-col lg:flex-row gap-x-6 width min-h-[300px]'>
        <Graph /> 
        <Chat/>
      </div>
    </div>
  )
}

export default page
