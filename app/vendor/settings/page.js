'use client'
import Account from '@/components/MerchantDashboard/Settings/Account'
import Security from '@/components/MerchantDashboard/Settings/Security'
import React, { useState } from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import { FaGreaterThan } from 'react-icons/fa6'
import CustomButton from '@/components/CustomButton'
import TimeandLocation from '@/components/MerchantDashboard/Settings/Business/TimeandLocation'
import TypeOfVendor from '@/components/MerchantDashboard/Settings/Business/TypeOfVendor'

const page = () => {
  const [tab, setTab] = useState('Account information')

  const changeTab = (e) => {
    setTab(e)
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
          <div className=' flex md:justify-end w-full  md:w-1/2 '>
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
          </div>
        </div>
        <div className='flex items-center gap-x-5'>
          <h1
            onClick={(e) => changeTab('Account information')}
            className={`${
              tab === 'Account information'
                ? 'text-lg md:text-2xl text-[#000000CC] font-semibold cursor-pointer'
                : 'text-lg md:text-2xl text-[#00000033] font-semibold cursor-pointer'
            }`}
          >
            Account information{' '}
          </h1>
          <span>
            <FaGreaterThan />
          </span>
          <h1
            onClick={(e) => changeTab('Business information')}
            className={`${
              tab === 'Business information'
                ? 'text-lg md:text-2xl text-[#000000CC] font-semibold cursor-pointer'
                : 'text-lg md:text-2xl text-[#00000033] font-semibold cursor-pointer'
            }`}
          >
            Business information
          </h1>
        </div>
      </div>
      <>
        {tab === 'Account information' ? (
          <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 width gap-x-4'>
            <Account />
            <Security />
          </div>
        ) : (
          <div className='width flex flex-col gap-y-6'>
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-3 w-full gap-x-4'>
              <TimeandLocation />
              <TypeOfVendor />
            </div>
            <div className='w-[100%] md:w-[70%] flex items-center gap-x-4 '>
              <CustomButton
                title='save'
                containerStyles='bg-[#218B07] text-white flex justify-center items-center py-4 px-8 rounded-[5px] gap-x-4 w-1/2'
                type='submit'
              />
              <CustomButton
                title='cancel'
                containerStyles='border text-black border-black flex justify-center items-center py-4 px-8 rounded-[5px] gap-x-4 w-1/2'
                type='submit'
              />
            </div>
          </div>
        )}
      </>
    </div>
  )
}

export default page
