import React from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
const page = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <div className="width flex justify-center items-center flex-col gap-y-12">
        <div className="w-full md:w-[50%] h-[40px] shadow-md px-4">
          <input type="text" className='w-[100%] h-[100%] border-0 outline-none' placeholder='Search anything here' />
        </div>
        <div className="flex w-full justify-center items-center gap-x-4 ">
          <div className="shadow-md flex justify-center flex-col items-center p-8 text-center gap-y-2">
            <span>< AiFillClockCircle className='text-5xl text-[#FF9C06]' /></span>
            <h1 className='text-3xl textt-[#333333] font-semibold'>Get started</h1>
            <p className=''>
              Understanding cafeteria in and out
              started from the onboarding</p>
          </div>
          <div className="shadow-md flex justify-center flex-col items-center p-8 text-center gap-y-2">
            <span><BsChat className='text-5xl text-[#FF9C06]' /></span>
            <h1 className='text-3xl textt-[#333333] font-semibold'>Faqs</h1>
            <p>
              Understanding cafeteria in and out
              started from the onboarding
            </p>
          </div>
          <div className="shadow-md flex justify-center flex-col items-center p-8 text-center gap-y-2">
            <span><BsChat className='text-5xl text-[#FF9C06]' /></span>
            <h1 className='text-3xl textt-[#333333] font-semibold'>Contact support</h1>
            <p className=''>
              Understanding cafeteria in and out
              started from the onboarding
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page