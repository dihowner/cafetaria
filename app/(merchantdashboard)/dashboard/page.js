'use client'
import Graph from '@/components/MerchantDashboard/Dashboard/Graph'
import Table from '@/components/MerchantDashboard/Dashboard/Table'
import TopSideBar from '@/components/MerchantDashboard/Dashboard/TopSideBar'

import React from 'react'

const page = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <TopSideBar />
      <Table />
      {/* <Graph /> */}
    </div>
  )
}

export default page
