import React from 'react'
import { mostVisited } from '@/components/Utilis/Dummy'
import CustomButton from '@/components/CustomButton'
import { BsClockHistory } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const SeconSide = () => {
  const { stat } = useSelector((state) => state.rootReducers)

  return (
    <div className='width grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-x-8 gap-y-4'>
      <div className='flex justify-center flex-col items-cent gap-x-3 gap-y-6 border border-[#0000000F] md:col-span-2 py-3 px-4 '>
        <h1 className='text-[#000000C2] text-3xl font-bold'>Recommended</h1>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-x-3'>
          {mostVisited.slice(0, 2).map((item, index) => (
            <div
              className=' rounded-[20px] flex flex-col gap-x-4 w-full'
              key={index}
            >
              {/* min-w-[240px] md:min-w-[301px] */}
              <div className='w-full'>
                <img src={item.image} alt='' className='object-fit w-[100%]' />
              </div>
              <h3 className='font-[600] text-lg'>{item.name}</h3>
              <div className=' flex flex-col  gap-y-4 '>
                <p className='font-[500] text-[#5B5B5B]'>{item.descpription}</p>
                <div className='flex gap-x-2 items-center'>
                  <span className='text-[#218B07]'>{item.ratings}</span>
                  <span>{item.Reviews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CustomButton
          title='Go To Page'
          containerStyles='bg-[#FF9C06]  py-2 px-2 flex justify-center items-center text-white rounded-[5px] text-lg w-[40%] gap-x-2 '
        />
      </div>
      <div className='flex sm:flex-row md:flex-col gap-x-4 flex-col gap-y-3'>
        <div className='w-[100%] sm:w-[100%] border flex justify-center items-center py-4  px-3 h-full'>
          <div className='w-[95%] flex flex-col justify-center items-center gap-y-8'>
            <div className='flex justify-center items-center w-full gap-x-3'>
              <span className='bg-[white] text-[#FF9C06] rounded-full  flex justify-center items-center h-full'>
                <BsClockHistory className='text-2xl' />
              </span>

              <div className='flex flex-col justify-center items-center gap-x-4'>
                <span className='text-sm text-[#000000CC] text-center font-bold'>
                  Total Order in Progress
                </span>
                <span className='text-3xl text-[#FF9C06] '>
                  {stat && stat?.allstat?.total_order_progress}
                </span>
              </div>
            </div>
            <div className='w-full'>
              <CustomButton
                title='View orders'
                containerStyles='bg-[#FF9C06]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[100%] gap-x-2 '
              />
            </div>
          </div>
        </div>
        <div className='w-[100%] sm:w-[100%] border flex justify-center items-center py-4  px-3 h-full'>
          <div className='w-[95%] flex flex-col justify-center items-center gap-y-8 h-full'>
            <div className='flex justify-center items-center w-full gap-x-3'>
              <span className='bg-[white]   text-[#FF9C06] rounded-full flex justify-center items-center h-full'>
                <BsClockHistory className='text-2xl' />
              </span>

              <div className='flex flex-col justify-center items-center gap-x-4 '>
                <span className='text-sm text-[#000000CC] text-center font-bold'>
                  Total Order Recieved
                </span>
                <span className='text-3xl text-[#FF9C06] '>
                  {stat && stat?.allstat?.total_order_received}
                </span>
              </div>
            </div>
            <div className='w-full'>
              <CustomButton
                title='View orders'
                containerStyles='bg-[#FF9C06]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[100%] gap-x-2 '
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeconSide
