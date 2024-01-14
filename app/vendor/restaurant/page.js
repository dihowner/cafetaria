'use client'
import CustomButton from '@/components/CustomButton'
import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { MdSwipeDownAlt } from 'react-icons/md'
import { ItemsTableData } from '@/components/Utilis/Dummy'
import AdditemModal from '@/components/MerchantDashboard/item/AdditemModal'
import ResturantItems from '@/components/MerchantDashboard/item/ResturantItems'
import { useRouter } from 'next/navigation'
const page = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }
  const router=useRouter()

  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='width flex flex-col gap-y-4 border'>
        <div className='flex justify-between  w-full md:items-center flex-col md:flex-row gap-y-6 p-4 '>
          <div className='flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg'>
            <span>
              <MdSwipeDownAlt />
            </span>
            <span>Restuarant Items</span>
          </div>
          <CustomButton
            title='Add'
            containerStyles='text-[#218B07] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 border-[#218B07] border'
            Icon={<IoIosAdd />}
            handleClick={() => {
              router.push('restaurant/add-meal')
            }}
          />
        </div>
        <div className='flex justify-between items-center bg-[#218B07] p-4'>
          <div className='flex gap-x-4'>
            <CustomButton
              title='All Items 48'
              containerStyles='text-[#218B07] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4  bg-[white]'
            />
            <CustomButton
              title='Active 31'
              containerStyles='text-[white] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4 border-[white] border'
            />
            <CustomButton
              title='Not Active 17'
              containerStyles='text-[white] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4 border-[white] border'
            />
          </div>
        </div>
        <ResturantItems ItemsTableData={ItemsTableData} />
      </div>
      <AdditemModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  )
}

export default page
