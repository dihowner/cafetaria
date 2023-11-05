'use client'

import React from 'react'
import { BsHandbag, BsTruck } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'next/navigation'
const GetStarted = () => {
    const router =useRouter()
  return (
    <div className='w-full flex justify-center flex-col gap-y-6 items-center '>
      <div className='grid grid-cols-1 gap-y-6 md:grid-cols-3 gap-x-6 width'>
        <div className=' bg-[#C9C9C926] p-6 md:col-span-1 md:row-span-5 rounded-lg'>
          <div className='w-[90%] flex flex-col gap-y-6'>
            <span className='bg-[#FF9C06] rounded-lg flex justify-center p-2 text-lg w-12 text-white '>
              <BsHandbag />
            </span>
            <h3 className='text-xl font-semibold'>Own your online shop</h3>
            <p className='text-sm'>
              Love this plugin! Does exactly what it is supposed to do and so
              far without any real issues. You might want to review some Dummy
              Text generation which contains words and even sentences with a
              meaning and that should
            </p>
            <div className='w-full flex justify-start items-center'>
              <img src='/Rectangle 86.png' alt='' className='w-[70%]' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-y-6 md:col-start-2 md:col-span-1 md:row-start-2 md:row-span-5'>
          <div className=' bg-[#C9C9C926] p-6 flex flex-col gap-y-6 rounded-lg'>
            <span className='bg-[#FF9C06] rounded-lg flex justify-center p-2 text-lg w-12 text-white  '>
              {' '}
              <AiOutlineShoppingCart />
            </span>
            <h3 className='text-xl font-semibold'>Own your online shop</h3>
            <p className='text-sm'>
              Love this plugin! Does exactly what it is supposed to do and so
              far without any real issues. You might want to review some Dummy
              Text generation which contains words and even sentences with a
              meaning and that should
            </p>
          </div>
          <div className=' bg-[#FF9C06]  p-6 gap-y-6 text-white rounded-lg'>
            <span className='bg-[white] rounded-lg flex justify-center p-2 text-lg w-12 text-[#ff9c06] '>
              {' '}
              <BsTruck />
            </span>
            <h3 className='text-xl font-semibold'>Own your online shop</h3>
            <p className='text-sm'>
              Love this plugin! Does exactly what it is supposed to do and so
              far without any real issues. You might want to review some Dummy
              Text generation which contains words and even sentences with a
              meaning and that should
            </p>
          </div>
        </div>

        <div className=' bg-[#C9C9C926] p-6 md:col-start-3 md:col-span-1 md:row-span-5 rounded-lg'>
          <div className='w-[90%] flex flex-col gap-y-6'>
            <span className='bg-[#FF9C06] rounded-lg flex justify-center p-2 text-lg w-12 text-white '>
              <BsHandbag />
            </span>
            <h3 className='text-xl font-semibold'>Own your online shop</h3>
            <p className='text-sm'>
              Love this plugin! Does exactly what it is supposed to do and so
              far without any real issues. You might want to review some Dummy
              Text generation which contains words and even sentences with a
              meaning and that should
            </p>
            <div className='w-full flex justify-start items-center'>
              <img src='/Rectangle 86.png' alt='' className='w-[70%]' />
            </div>
          </div>
        </div>
      </div>
      <CustomButton
        title='Get Started'
        containerStyles='bg-[#FF9C06]  py-4 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[40%]  md:w-[20%]'
        // handleClick={router.push('/login')}
      />
    </div>
  )
}

export default GetStarted
