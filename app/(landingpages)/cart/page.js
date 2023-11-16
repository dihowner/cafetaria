import React from 'react'
import { MdDelete } from 'react-icons/md'
import { IoAddCircle } from 'react-icons/io5'
import { AiFillMinusCircle } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaTimesCircle } from 'react-icons/fa'
const page = () => {
  return (
    <div className='w-[100%] flex justify-center items-center flex-col bg-[#F6F6F6] py-16 gap-y-4'>
      <div className='capitalize grid grid-cols-3  width'>
        <div className='flex justify-between col-span-2 '>
          <span>pending Orders</span>
          <div className='flex gap-x-3 items-center text-base'>
            <span>clear all </span>
            <span>
              <MdDelete />
            </span>
          </div>
        </div>
      </div>
      <div className='width grid grid-cols-3 gap-x-6'>
        <div className='col-span-2 w-full flex flex-col justify-center items-center gap-y-3'>
          <div className='w-full flex flex-col gap-y-4'>
            <div className='w-full bg-white flex justify-center items-center px-8 py-6 rounded-lg'>
              <div className='w-[90%] flex flex-col gap-y-8'>
                <div className='flex justify-between'>
                  <div className='flex gap-x-3'>
                    <div className='w-24 h-24'>
                      <img
                        src='/Images/Rectangle 84.png'
                        alt=''
                        className='w-full h-full'
                      />
                    </div>
                    <div className='flex- flex-col'>
                      <h className='text-[#000000BA] text-lg font-semibold'>
                        Amala Sky
                      </h>
                      <p className='text-base text-balck'>Jollof rice</p>
                      <span className='text-sm text-[#ABABAB]'>Takeaway</span>
                    </div>
                  </div>
                  <p className='text-[#000000A3] text-lg'>3500</p>
                </div>
                <div className='flex justify-between'>
                  <div className='flex gap-x-3 items-center text-xl text-[#00000099] cursor-pointer'>
                    <span>
                      <MdDelete />
                    </span>
                    <span>Remove </span>
                  </div>
                  <div className='flex justify-center items-center gap-x-6'>
                    <div className='flex justify-center items-center gap-x-6 text-[#222222D4] text-xl'>
                      <span>
                        <IoAddCircle />
                      </span>
                      <span className='text-underline'>{1}</span>
                      <span>{<AiFillMinusCircle />}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full bg-white flex justify-center items-center px-8 py-6 rounded-lg'>
              <div className='w-[90%] flex flex-col gap-y-8'>
                <div className='flex justify-between'>
                  <div className='flex gap-x-3'>
                    <div className='w-24 h-24'>
                      <img
                        src='/Images/Rectangle 84.png'
                        alt=''
                        className='w-full h-full'
                      />
                    </div>
                    <div className='flex- flex-col'>
                      <h className='text-[#000000BA] text-lg font-semibold'>
                        Amala Sky
                      </h>
                      <p className='text-base text-balck'>Jollof rice</p>
                      <span className='text-sm text-[#ABABAB]'>Takeaway</span>
                    </div>
                  </div>
                  <p className='text-[#000000A3] text-lg'>3500</p>
                </div>
                <div className='flex justify-between'>
                  <div className='flex gap-x-3 items-center text-xl text-[#00000099] cursor-pointer'>
                    <span>
                      <MdDelete />
                    </span>
                    <span>Remove </span>
                  </div>
                  <div className='flex justify-center items-center gap-x-6'>
                    <div className='flex justify-center items-center gap-x-6 text-[#222222D4] text-xl'>
                      <span>
                        <IoAddCircle />
                      </span>
                      <span className='text-underline'>{1}</span>
                      <span>{<AiFillMinusCircle />}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 w-full bg-white flex justify-center items-center px-8 py-6 rounded-lg'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex justify-center items-center gap-x-2'>
              <span>
                <AiOutlineShoppingCart />
              </span>
              <h6>Cart Summary</h6>
            </div>
            <div className="bg-black p-3 flex justify-center items-center text-white">
              <FaTimesCircle/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
