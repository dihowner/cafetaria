'use client'
import Account from '@/components/MerchantDashboard/Settings/Account'
import Security from '@/components/MerchantDashboard/Settings/Security'
import React, { useState } from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import { FaGreaterThan } from 'react-icons/fa6'
import CustomButton from '@/components/CustomButton'
import TimeandLocation from '@/components/MerchantDashboard/Settings/Business/TimeandLocation'
import TypeOfVendor from '@/components/MerchantDashboard/Settings/Business/TypeOfVendor'
import BankSetUp from '@/components/MerchantDashboard/Settings/BankSetUp'
import UpdatePin from '@/components/MerchantDashboard/Settings/UpdatePin'

const page = () => {
  const [tab, setTab] = useState('Account information')

  const changeTab = (tab) => {
    setTab(tab)
  }
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <div className='width flex flex-col gap-y-4'>
        <div className='flex justify-between md:items-center flex-col md:flex-row gap-y-6 w-full p-4  '>
          <div className='flex flex-col gap-y-8 w-full md:w-1/2'>
            <div className='flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg w-[45%] md:w-[40%]'>
              <span>
                <MdOutlineSettings />
              </span>
              <span>Settings</span>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-x-5 w-full'>
          <div className='flex justify-between items-center gap-x-5 md:w-[80%] w-full'>
            <h1
              onClick={(e) => changeTab('Account information')}
              className={`${
                tab === 'Account information'
                  ? 'text-lg md:text-2xl text-[#218B07] font-semibold cursor-pointer border-[#218B07] border p-4'
                  : 'text-lg md:text-2xl text-[#00000033] font-semibold cursor-pointer'
              }`}
            >
              Account information{' '}
            </h1>
            <h1
              onClick={(e) => changeTab('Security information')}
              className={`${
                tab === 'Security information'
                  ? 'text-lg md:text-2xl text-[#218B07]  border-[#218B07] border p-4 font-semibold cursor-pointer'
                  : 'text-lg md:text-2xl text-[#00000033] font-semibold cursor-pointer'
              }`}
            >
              Security information
            </h1>
            <h1
              onClick={(e) => changeTab('Withdrawal information')}
              className={`${
                tab === 'Withdrawal information'
                  ? 'text-lg md:text-2xl text-[#218B07]  border-[#218B07] border p-4 font-semibold cursor-pointer'
                  : 'text-lg md:text-2xl text-[#00000033] font-semibold cursor-pointer'
              }`}
            >
              Withdrawal information
            </h1>
          </div>
        </div>
      </div>
      <>
        {tab === 'Account information' && (
          <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 width gap-x-4'>
            <Account />
            <TimeandLocation />
          </div>
        )}
        {tab === 'Security information' && (
          <div className='width flex flex-col gap-y-6'>
            <div className='w-full flex justify-center gap-x-4'>
              <Security />
            </div>
          </div>
        )}
        {tab === 'Withdrawal information' && (
          <div className='width grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2'>
            <BankSetUp />
            <UpdatePin />
          </div>
        )}
      </>
    </div>
  )
}

export default page

{
  /* <div className=' flex md:justify-end w-full  md:w-1/2 '>
            <div className='flex gap-x-6 border w-full md:w-[80%] py-4 px-4'>
              <div className='w-16 h-12'>
                <img
                  src='/Images/Rectangle 86.png'
                  alt=''
                  className='w-full h-full'
                />
              </div>
               <div className='flex flex-col gap-y-3'>
                <h6>Profile picture</h6>
                <div className='flex gap-x-4 '>
                  <CustomButton
                    title='Change picture'
                    containerStyles='bg-[#218B07] text-white flex justify-center items-center rounded-[5px] px-2 py-3'
                  />
                  <CustomButton
                    title='remove'
                    containerStyles='bg-[#E6E6E6] text-white flex justify-center items-center rounded-[5px] px-2 py-3'
                  />
                </div>
              </div> 
            </div>
          </div>*/
}
