import Table from '@/components/MerchantDashboard/Withdraw/Table'
import Topside from '@/components/MerchantDashboard/Withdraw/Topside'
import WithdrawBar from '@/components/MerchantDashboard/Withdraw/WithdrawBar'
import WithdrawSec from '@/components/MerchantDashboard/Withdraw/WithdrawSec'
import React from 'react'
import { BiMoneyWithdraw } from 'react-icons/bi'
const page = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <div className='width'>
        <div className='flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg w-[60%] md:w-[30%]'>
          <span className='text-xl'>
            <BiMoneyWithdraw />
          </span>
          <span>Withdraw</span>
        </div>
      </div>
      <Topside />
      <div className='width flex gap-x-3 flex-col md:flex-row '>
        <WithdrawSec />
        <WithdrawBar />
      </div>
      <Table/>
    </div>
  )
}

export default page
