'use client'
import CustomButton from '@/components/CustomButton'
import InputsCustom from '@/components/InputsCustom'
import Image from 'next/image'
import React from 'react'
import { BiRadioCircle } from 'react-icons/bi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { GiPadlock } from 'react-icons/gi'
import { FaStore } from 'react-icons/fa'
import { FaSquarePhoneFlip } from 'react-icons/fa6'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
const page = () => {
  const router = useRouter()
  return (
    <div className='flex justify-center bg-[#F6F6F6] w-[100%] py-8 min-h-[100svh]'>
      <div className='flex flex-col items-stretch md:flex-row bg-[white] w-[80%] gap-x-6 gap-y-6 px-4 py-2 '>
        <div className='bg-[#218B07] flex flex-col px-6 justify-center items-center rounded-3xl text-white w-[100%] sm:w-[90%] lg:w-[50%] py-16 h-[100%]'>
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
            <h3 className='text-2xl font-bold'>Sign up</h3>
            <span>
              Don’t have an account?{' '}
              <Link href='/merchant-login' className='text-[#218B07]'>
                login
              </Link>{' '}
            </span>
          </div>
          <div className='flex flex-col gap-y-4'>
            <p>Sign Up as</p>
            <div className='flex gap-x-4 w-[100%] flex-col sm:flex-row gap-y-4 md:w-[50%]'>
              <CustomButton
                title='Customer'
                containerStyles='text-[#00000087] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4  border'
                Icon={<BiRadioCircle />}
                handleClick={() => router.push('/login')}
              />
              <CustomButton
                title='Merchant'
                containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 bg-[#218B07]'
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
              <InputsCustom
                title='Confirm Password'
                value=''
                onchange=''
                Icon={<GiPadlock />}
              />
              <InputsCustom
                title='Store Name'
                value=''
                onchange=''
                Icon={<FaStore />}
              />
              <InputsCustom
                title='Phone Number'
                value=''
                onchange=''
                Icon={<FaSquarePhoneFlip />}
                type='number'
              />
              <div className=''>
                <p>Do you have a Physical Shop</p>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                >
                  <FormControlLabel
                    value='Yes'
                    control={<Radio />}
                    label='Yes'
                  />
                  <FormControlLabel value='No' control={<Radio />} label='No' />
                </RadioGroup>
              </div>
              <div className='flex gap-x-3 items-center flex-col lg:flex-row gap-y-2'>
                <CustomButton
                  title='Sign Up'
                  containerStyles='bg-[#218B07] text-white flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4'
                  type='submit'
                />
                {/* <span>
                  Forgot password?{' '}
                  <Link href='/forgetpassword' className='text-[#218B07]'>
                    click here
                  </Link>{' '}
                </span> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
