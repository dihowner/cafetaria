import SeconSide from '@/components/ClientDasboard/Dashboard/SeconSide'
import TopSide from '@/components/ClientDasboard/Dashboard/TopSide'
import React from 'react'
import { MdDashboard } from 'react-icons/md'
const page = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <div className='flex justify-between width md:items-center flex-col md:flex-row gap-y-6 p-4'>
        <div className='flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg'>
          <span>
            <MdDashboard />
          </span>
          <span>dashboard</span>
        </div>
      </div>
      <TopSide/>
      <SeconSide/>
    </div>
  )
}

export default page