import CustomButton from '@/components/CustomButton'
import React from 'react'

const Dedicate = () => {
    return (
        <div className='w-full flex justify-center flex-col gap-y-6 items-center'>
            <div className="width flex justify-center items-center flex-col gap-y-16">
                <h1 className='text-center text-xl md:text-3xl font-bold w-[100%] md:w-[60%] lg:w-[40%]'>We are just dedicated in giving
                you a stress free life</h1>
                <div className="img w-[100%]  flex justify-center items-center">
                    <img src="/about group (1).png" alt="" className='w-[80%] md:w-[50%] lg:w-[30%]' />
                </div>
                <CustomButton title='Sign Up'
                    containerStyles='bg-[#218B07]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[40%] md:w-[30%]  lg:w-[10%]' />
            </div>
        </div>
    )
}

export default Dedicate