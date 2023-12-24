'use client'
import CustomButton from '@/components/CustomButton'
import InputsCustom from '@/components/InputsCustom'
import Image from 'next/image'
import React, { useState } from 'react'
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
import { FaBars } from 'react-icons/fa'
import RegSidebar from '@/components/RegSidebar'
import { UseAuth } from '@/components/Utilis/Fetch/AuthFetchVendor'
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
  const [storeName, setStoreName] = useState()
  const [physicalShopValue, setPhysicalShopValue] = useState(true)
  const [address, setAddress] = useState()
  const { useSignUp, registerLoading } = UseAuth()
  const handlePhysicalShopChange = (event) => {
    setPhysicalShopValue(event.target.value === 'true')
  }
  const data = {
    name: name,
    mobile_number: phone,
    email: email,
    password: password,
    roles: 'vendor',
    isPhysicalStore: physicalShopValue,
    store_name: storeName,
    ...(physicalShopValue === true && { store_address: address }),
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password === cPassword) {
      if (isvalid) {
        await useSignUp(data)
      } else {
        toast.error('please fill out the field')
      }
    } else {
      toast.error('password do not match')
    }
  }
  const isvalid = email && password
  // console.log(data)
  return (
    <div className='flex justify-center bg-[#F6F6F6] w-[100%] py-8 min-h-[100vh]'>
      <div className='flex flex-col items-stretch md:flex-row bg-[white] w-[80%] gap-x-6 gap-y-6 px-4 py-2 '>
        <div className='bg-[#218B07] flex flex-col px-6 justify-center items-center rounded-3xl text-white w-[100%] sm:w-[100%] md:w-[50%] py-16 h-[100%] relative'>
          <div className='absolute top-0 left-0 p-4'>
            <FaBars
              className='text-3xl'
              onClick={() => {
                setToggle(true)
              }}
            />
          </div>
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
        <div className='w-[100%] md:w-[50%] h-full flex justify-center flex-col gap-y-6'>
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
              <h3 className='text-2xl font-bold'>Sign up</h3>
              <span>
                Don’t have an account?{' '}
                <Link href='/vendor/login' className='text-[#218B07]'>
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
                  handleClick={() => router.push('/client/signup')}
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
                  type='password'
                  onchange={setPassword}
                  Icon={<GiPadlock />}
                />
                <InputsCustom
                  title='Confirm Password'
                  value={cPassword}
                  type='password'
                  onchange={setCpassword}
                  Icon={<GiPadlock />}
                />
                <InputsCustom
                  title='Store Name'
                  value={storeName}
                  onchange={setStoreName}
                  Icon={<FaStore />}
                />

                <div className=''>
                  <p>Do you have a Physical Shop</p>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                    value={physicalShopValue}
                    onChange={handlePhysicalShopChange}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label='Yes'
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label='No'
                    />
                  </RadioGroup>
                </div>
                {physicalShopValue === true ? (
                  <InputsCustom
                    title='Store Address'
                    value={address}
                    onchange={setAddress}
                    Icon={<FaStore />}
                  />
                ) : null}

                <div className='flex gap-x-3 items-center flex-col lg:flex-row gap-y-2'>
                  <CustomButton
                    title={registerLoading ? 'loading.....' : 'Register'}
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
      <RegSidebar setToggle={setToggle} toggle={toggle} />
    </div>
  )
}

export default page
