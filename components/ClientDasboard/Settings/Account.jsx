import InputsCustom from '@/components/InputsCustom'
import React from 'react'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { FaPhoneSquare, FaRegUser } from "react-icons/fa";
import CustomButton from '@/components/CustomButton';
const Account = () => {
    return (
        <div className='flex flex-col gap-y-4 border p-6'>
            <h1 className='font-semibold text-3xl'>Account information</h1>
            <p className='text-[#00000066] text-sm'>These are your public information, be careful what u share</p>
            <form action="" className='flex flex-col gap-y-16'>
                <div className="flex flex-col gap-y-3 w-full">
                    <InputsCustom title='Email Address'
                        value=''
                        onchange=''
                        Icon={<HiOutlineEnvelope />} />
                    <InputsCustom title='username'
                        value=''
                        onchange=''
                        Icon={<FaRegUser />} />
                    <InputsCustom title='phone Number'
                        value=''
                        onchange=''
                        Icon={<FaPhoneSquare />} />
                </div>
                <div className="w-full flex items-center gap-x-4">
                    <CustomButton title='save'
                        containerStyles='bg-[#FF9C06] text-white flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2'
                        type='submit' />
                    <CustomButton title='cancel'
                        containerStyles='border text-black border-black flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2'
                        type='submit' />
                </div>

            </form>
        </div>
    )
}

export default Account