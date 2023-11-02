'use client'
import CustomButton from '@/components/CustomButton'
import InputsCustom from '@/components/InputsCustom'
import Image from 'next/image'
import React from 'react'
import { BiRadioCircle } from 'react-icons/bi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { GiPadlock } from 'react-icons/gi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// Link
const page = () => {
  const router = useRouter()
  return (
    <div className='flex justify-center bg-[#F6F6F6] w-[100%] py-8 h-[100svh]'>
      <div className='flex flex-col justify-center items-center md:flex-row bg-[white] w-[80%] gap-x-6 gap-y-6 px-4 py-2 h-full '>
        <div className='bg-[#218B07] flex flex-col px-4 justify-center items-center rounded-3xl text-white w-[100%] sm:w-[90%] lg:w-[50%] py-16 h-full'>
          <div className='w-[80%] flex flex-col justify-center items-center gap-y-3'>
            <h1 className='text-4xl lg:text-6xl  text-center font-bold'>
              Grow your business.
            </h1>
            <div className='w-[80%] flex justify-center items-center'>
              <img src='/Images/Rectangle 84 (1).png' />
            </div>
            {/* <p className='text-center'>
              No stress with cafeteria the best app that enables you to shop
              from home
            </p> */}
          </div>
        </div>
        <div className='w-[100%] lg:w-[50%] h-full flex flex-col gap-y-6'>
          <div className='flex flex-col gap-y-3'>
            <h3 className='text-2xl font-bold'>Login</h3>
            <span>
              Don’t have an account?{' '}
              <Link href='/merchant-signup' className='text-[#218B07]'>
                sign up
              </Link>{' '}
            </span>
          </div>
          <div className='flex flex-col gap-y-4'>
            <p>Sign in as</p>
            <div className='flex gap-x-4 w-[100%] flex-col sm:flex-row gap-y-4 md:w-[50%]'>
              <CustomButton
                title='Customer'
                containerStyles='text-[#00000087] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4  border'
                Icon={<BiRadioCircle />}
                handleClick={() => router.push('/login')}
              />
              <CustomButton
                title='Merchant'
                containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 border bg-[#218B07]'
                Icon={<BiRadioCircle />}
              />
            </div>
            <form
              action=''
              className='flex flex-col gap-y-6 w-[100%] md:w-[60%]'
            >
              <InputsCustom
                title='Email Address'
                value=''
                onchange=''
                Icon={<HiOutlineEnvelope />}
              />
              <InputsCustom
                title='Password'
                value=''
                onchange=''
                Icon={<GiPadlock />}
              />
              <div className='flex gap-x-3 items-center flex-col lg:flex-row gap-y-2'>
                <CustomButton
                  title='Login'
                  containerStyles='bg-[#218B07] text-white flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4'
                  type='submit'
                />
                <span>
                  Forgot password?{' '}
                  <Link
                    href='/merchant-forgetpassword'
                    className='text-[#218B07]'
                  >
                    click here
                  </Link>{' '}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
