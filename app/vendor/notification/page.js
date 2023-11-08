import React from 'react'
import { MdNotifications } from 'react-icons/md'
import { LiaTimesSolid } from 'react-icons/lia'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
// Link
const page = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <div className='flex justify-between items-cente flex-col width gap-y-5 '>
        <div className='flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg w-[60%] md:w-[30%]'>
          <span className='text-xl'>
            <MdNotifications />
          </span>
          <span>Notifications</span>
        </div>
        <div className='w-[100%] md:w-[70%] capitalize flex gap-x-3 '>
          <span className='bg-[#E8E8E8] p-2 h-12 justify-center flex items-center rounded-md'>
            <LiaTimesSolid className='text-xl' />
          </span>
          <div className='border-b capitalize flex flex-col gap-y-3 w-full '>
            <div className='flex sm:flex-row flex-col justify-between md:items-center'>
              <span className='bg-[#FF9C06] flex justify-center items-center p-2 text-white rounded-md w-[60%] md:w-[40%] lg:w-[20%]'>
                New Order
              </span>
              <p>24 minutes ago</p>
            </div>
            <div className=''>
              <h3 className='text-[#444444]'>
                You just received a new order from Abayomi daniels
              </h3>
              <p className='text-[#00000087]'>
                J and p bus-stop moniya ibadan, Fatokun street ,Iyanu oluwa
                block industry | Oyo - AKINYELE | +234 8162567067
              </p>
            </div>
            <div className='flex justify-end items-center'>
              <Link
                href={`/vendor/orders/$`}
                className='text-[#218B07]  gap-x-1 mt-6 font-semibold flex items-center'
              >
                <p> view details </p>
                <span>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[100%] md:w-[70%] capitalize flex gap-x-3 '>
          <span className='bg-[#E8E8E8] p-2 h-12 justify-center flex items-center rounded-md'>
            <LiaTimesSolid className='text-xl' />
          </span>
          <div className='border-b capitalize flex flex-col gap-y-3 w-full '>
            <div className='flex sm:flex-row flex-col justify-between md:items-center'>
              <span className='bg-[#FF9C06] flex justify-center items-center p-2 text-white rounded-md w-[60%] md:w-[40%] lg:w-[20%]'>
                New Order
              </span>
              <p>24 minutes ago</p>
            </div>
            <div className=''>
              <h3 className='text-[#444444]'>
                You just received a new order from Abayomi daniels
              </h3>
              <p className='text-[#00000087]'>
                J and p bus-stop moniya ibadan, Fatokun street ,Iyanu oluwa
                block industry | Oyo - AKINYELE | +234 8162567067
              </p>
            </div>
            <div className='flex justify-end items-center'>
              <Link
                href={`/vendor/orders/$`}
                className='text-[#218B07]  gap-x-1 mt-6 font-semibold flex items-center'
              >
                <p> view details </p>
                <span>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[100%] md:w-[70%] capitalize flex gap-x-3 '>
          <span className='bg-[#E8E8E8] p-2 h-12 justify-center flex items-center rounded-md'>
            <LiaTimesSolid className='text-xl' />
          </span>
          <div className='border-b capitalize flex flex-col gap-y-3 w-full '>
            <div className='flex sm:flex-row flex-col justify-between md:items-center'>
              <span className='bg-[#FF9C06] flex justify-center items-center p-2 text-white rounded-md w-[60%] md:w-[40%] lg:w-[20%]'>
                New Order
              </span>
              <p>24 minutes ago</p>
            </div>
            <div className=''>
              <h3 className='text-[#444444]'>
                You just received a new order from Abayomi daniels
              </h3>
              <p className='text-[#00000087]'>
                J and p bus-stop moniya ibadan, Fatokun street ,Iyanu oluwa
                block industry | Oyo - AKINYELE | +234 8162567067
              </p>
            </div>
            <div className='flex justify-end items-center'>
              <Link
                href={`/vendor/orders/$`}
                className='text-[#218B07]  gap-x-1 mt-6 font-semibold flex items-center'
              >
                <p> view details </p>
                <span>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
