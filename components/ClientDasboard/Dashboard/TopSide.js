import CustomButton from '@/components/CustomButton'
import React from 'react'
import { FaMoneyBill } from 'react-icons/fa6'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const TopSide = () => {
  const { stat } = useSelector((state) => state.rootReducers)

  return (
    <div className='width grid grid-cols-1  md:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 min-h-[150px]'>
      <div className='rounded-xl clientDashboard flex justify-center items-center h-full py-4 col-span-1'>
        <div className='w-[95%] flex justify-between items-center gap-x-4 gap-y-8 h-full'>
          <div className='w-[20%]'>
            <img
              src='/Rectangle 87.png'
              alt=''
              className='rounded-full h-20 w-20'
            />
          </div>
          <div className='w-[80%] text-white flex flex-col gap-y-4'>
            <h1 className='text-3xl font-semibold'>Abayomi Daniel</h1>
            <p>
              J and p bus-stop moniya ibadan, Fatokun street ,Iyanu oluwa block
              industry | Oyo - AKINYELE | +234 8162567067
            </p>
            <CustomButton
              title='Edit Profile'
              containerStyles='bg-[#FF9C06]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[50%] '
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-3 h-full col-span-1'>
        <div className='w-[100%] sm:w-[50%] border flex justify-center items-center py-4  px-3 h-full'>
          <div className='w-[95%] flex flex-col justify-center items-center gap-y-8'>
            <div className='flex justify-center items-center w-full gap-x-3'>
              <div className='bg-[#218B07] w-[20%] h-12 flex justify-center items-center'>
                <span className='bg-[white] text-[#218B07] rounded-full w-[90%] flex justify-center items-center h-full'>
                  <FaMoneyBill className='text-2xl' />
                </span>
              </div>
              <div className='flex flex-col justify-center items-center gap-x-4 w-[80%]'>
                <span className='text-sm text-[#0000004F] text-center'>
                  Total Amount Spent
                </span>
                <span className='text-3xl text-[#218B07] '>30,000</span>
              </div>
            </div>
            <div className='w-full'>
              <CustomButton
                title='View Transaction'
                containerStyles='bg-[#218B07]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-sm w-[100%] gap-x-2 '
                Icon={<FaMoneyBill />}
              />
            </div>
          </div>
        </div>
        <div className='w-[100%] sm:w-[50%] border flex justify-center items-center py-4  px-3 h-full'>
          <div className='w-[95%] flex flex-col justify-center items-center gap-y-8'>
            <div className='flex justify-center items-center w-full gap-x-3'>
              <div className='bg-[#FF9C06] w-[20%] h-12 flex justify-center items-center'>
                <span className='bg-[white] text-[#FF9C06] rounded-full w-[90%] flex justify-center items-center h-full'>
                  <AiOutlineShoppingCart className='text-2xl' />
                </span>
              </div>
              <div className='flex flex-col justify-center items-center gap-x-4 w-[80%]'>
                <span className='text-sm text-[#0000004F] text-center'>
                  Total Cart
                </span>
                <span className='text-3xl text-[#FF9C06] '>
                  {stat && stat?.allstat?.total_cart}
                </span>
              </div>
            </div>
            <div className='w-full'>
              <CustomButton
                title='View Cart'
                containerStyles='bg-[#FF9C06]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-sm w-[100%] gap-x-2 '
                Icon={<AiOutlineShoppingCart />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSide
