'use client'
import Chat from '@/components/MerchantDashboard/Dashboard/Chat'
import Graph from '@/components/MerchantDashboard/Dashboard/Graph'
import Table from '@/components/MerchantDashboard/Dashboard/Table'
import TopSideBar from '@/components/MerchantDashboard/Dashboard/TopSideBar'
import { MdDashboard } from 'react-icons/md'
import { BiMoneyWithdraw } from 'react-icons/bi'
import React from 'react'

const page = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <div className='flex justify-between  width md:items-center flex-col md:flex-row gap-y-6 p-2  '>
      <div className='flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg'>
          <span>
            <MdDashboard />
          </span>
          <span>dashboard</span>
        </div>
        <div className='flex items-center text-sm  gap-x-2 capitalize text-white rounded-lg p-2 bg-[#218B07]'>
          <span>
            <BiMoneyWithdraw />
          </span>
          <span>Withdraw</span>
        </div>
      </div>
      <TopSideBar />
      <Table />
      {/* <div className='flex flex-col lg:flex-row gap-x-6 width min-h-[300px]'>
        <Graph /> 
        <Chat/>
      </div> */}
    </div>
  )
}
export default page
