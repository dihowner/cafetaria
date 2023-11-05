'use client'
import CustomButton from '@/components/CustomButton'
import React from 'react'
import { useRouter } from 'next/navigation'
const Stress = () => {
    const router = useRouter()
    return (
        <div className='w-full flex justify-center flex-col gap-y-6 items-center'>
            <div className="flex justify-between items-center flex-col md:flex-row width bg-[#218B07] p-8 gap-y-8 ">
                <div className="w-[100%] md:w-[50%] flex justify-center gap-y-6 flex-col">
                    <h1 className='text-white text-3xl font-[700]'>Order with zero stress</h1>
                    <p className=' text-sm sm:text-base text-white'>Love this plugin! Does exactly what it is supposed to do and so far without any real issues. (You might want to review some Dummy Text generation which contains words and even sentences with a meaning and that should not suppose to</p>
                    <CustomButton title='Get Started'
                        containerStyles='bg-[white] py-4 px-2 flex justify-center items-center rounded-[8px] text-lg w-[90] sm:w-[40%] text-[#218B07]  md:w-[40%] lg:w-[30%]'
                    // handleClick={router.push('/login')}
                    />
                </div>
                <div className="w-[100%] md:w-[50%] flex justify-center items-center">
                    <img src='/Group 106.png' alt="" className='w-[100%] sm:w-[70%] md:w-[80%]' />
                </div>
            </div>
        </div>
    )
}

export default Stress