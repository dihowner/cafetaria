'use client'
import CustomButton from '@/components/CustomButton'
import InputsCustom from '@/components/InputsCustom'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiRadioCircle } from 'react-icons/bi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { GiPadlock } from 'react-icons/gi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaBars } from 'react-icons/fa'
import RegSidebar from '@/components/RegSidebar'
import { UseAuth } from '@/components/Utilis/Fetch/AuthFetch'
import { toast } from 'react-toastify'
import { useRegisterMutation } from '@/redux/userApiSlice'

const page = () => {
  const router = useRouter()
  const [toggle, setToggle] = useState(false)
  const [password, setPassword] = useState()
  const [cPassword, setCpassword] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [name, setName] = useState()

  const { useSignUp, registerLoading } = UseAuth()

  const data = {
    name: name,
    mobile_number: phone,
    email: email,
    password: password,
    roles: 'user',
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password === cPassword) {
      if (isvalid) {
        await useSignUp(data)
        router.push('/client/otp')
      } else {
        toast.error('please fill out the field')
      }
    } else {
      toast.error('password do not match')
    }
  }
  const isvalid = email && password

  return (
    <div className='flex justify-center bg-[#F6F6F6] w-[100%] py-8 min-h-[100svh]'>
      <div className='flex flex-col  justify-center items-center md:flex-row bg-[white] w-[80%] gap-x-6 gap-y-6 px-4 py-2 '>
        <div className='bg-[#FF9C06] flex flex-col px-4 justify-center items-center rounded-3xl text-white w-[100%] sm:w-[100%] md:w-[50%] py-16 h-full relative'>
          <div className='absolute top-0 left-0 p-4'>
            <FaBars
              className='text-3xl'
              onClick={() => {
                setToggle(true)
              }}
            />
          </div>
          <div className='w-[80%] flex flex-col justify-center items-center gap-y-3'>
            <h1 className='text-4xl lg:text-6xl text-center font-bold'>
              You Made the right choice
            </h1>
            <div className='w-[80%] flex justify-center items-center'>
              <img src='/Images/Rectangle 84 (1).png' />
            </div>
            <p className='text-center'>
              No stress with cafeteria the best app that enables you to shop
              from home
            </p>
          </div>
        </div>
        <div className='w-[100%] md:w-[50%] h-full justify-center flex flex-col gap-y-6'>
          <div className='flex justify-end'>
            <Link href='/' className='logo w-[20%]'>
              <Image
                src='/cafetarialogo.png'
                alt='logo'
                width={118}
                height={18}
                className='object-contain'
              />
            </Link>
          </div>
          <div className='flex justify-center flex-col h-full'>
            <div className='flex flex-col gap-y-3'>
              <h3 className='text-2xl font-bold'>Sign Up</h3>
              <span>
                Have an account?{' '}
                <Link href='/client/login' className='text-[#FF9C06]'>
                  log in
                </Link>{' '}
              </span>
            </div>
            <div className='flex flex-col gap-y-4'>
              <p>Register as</p>
              <div className='flex gap-x-4 w-[100%] flex-col sm:flex-row gap-y-4 md:w-[50%]'>
                <CustomButton
                  title='Customer'
                  containerStyles='bg-[#FF9C06] text-white flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4'
                  Icon={<BiRadioCircle />}
                />
                <CustomButton
                  title='Merchant'
                  containerStyles='text-[#00000087] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 border'
                  Icon={<BiRadioCircle />}
                  handleClick={() => router.push('/vendor/signup')}
                />
              </div>
              <form
                action=''
                className='flex flex-col gap-y-6 w-[100%] md:w-[60%]'
                onSubmit={handleSubmit}
              >
                <InputsCustom
                  title='Full Name'
                  value={name}
                  onchange={setName}
                  Icon={<HiOutlineEnvelope />}
                />
                <InputsCustom
                  title='Email Address'
                  value={email}
                  onchange={setEmail}
                  Icon={<HiOutlineEnvelope />}
                />
                <InputsCustom
                  title='Phone Number'
                  value={phone}
                  onchange={setPhone}
                  type='number'
                  Icon={<HiOutlineEnvelope />}
                />
                <InputsCustom
                  title='Password'
                  value={password}
                  onchange={setPassword}
                  Icon={<GiPadlock />}
                />
                <InputsCustom
                  title='Confirm Password'
                  value={cPassword}
                  onchange={setCpassword}
                  Icon={<GiPadlock />}
                />
                <CustomButton
                  title={registerLoading ? 'loading.....' : 'Register'}
                  containerStyles='bg-[#FF9C06] text-white flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4'
                  type='submit'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <RegSidebar setToggle={setToggle} toggle={toggle} />
    </div>
  )
}

export default page
