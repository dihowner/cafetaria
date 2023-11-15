'use client'
import CustomButton from '@/components/CustomButton'
import InputsCustom from '@/components/InputsCustom'
import Image from 'next/image'
import React from 'react'
import { BiRadioCircle } from 'react-icons/bi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { GiPadlock } from 'react-icons/gi'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
const page = () => {
    return (
        <div className='flex justify-center bg-[#F6F6F6] w-[100%] py-8 min-h-[100svh]'>
            <div className='flex flex-col  justify-center items-center md:flex-row bg-[white] w-[80%] gap-x-6 gap-y-6 px-4 py-2 '>
                <div className='bg-[#FF9C06] flex flex-col px-4 justify-center items-center rounded-3xl text-white w-[100%] sm:w-[100%] md:w-[50%] py-16 h-full relative'>
                    <div className="absolute top-0 left-0 p-4">
                        <FaBars className='text-3xl' />
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
                    <div className="flex flex-col justify-center h-full">
                        <div className='flex flex-col gap-y-3'>
                            <h3 className='text-2xl font-bold'>Forgot password?</h3>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <form action='' className='flex flex-col gap-y-6 w-[100%] md:w-[80%]'>
                                <InputsCustom
                                    title='Email Address'
                                    value=''
                                    onchange=''
                                    Icon={<HiOutlineEnvelope />}
                                />

                                <div className='flex flex-col lg:flex-row gap-y-2 gap-x-3 items-center'>
                                    <CustomButton
                                        title='Send Verification code'
                                        containerStyles='bg-[#FF9C06] text-white flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4'
                                        type='submit'
                                    />
                                    <span>
                                        Get Back to{' '}
                                        <Link href='/client/login' className='text-[#FF9C06]'>
                                            log in
                                        </Link>{' '}
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
