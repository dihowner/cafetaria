import InputsCustom from '@/components/InputsCustom'
import React from 'react'
import { GiPadlock } from 'react-icons/gi'
import Link from 'next/link'
import CustomButton from '@/components/CustomButton';
const Security = () => {
    return (
        <div className='flex flex-col gap-y-4 border p-6'>
            <h1 className='font-semibold text-3xl'>Security</h1>
            <p className='text-[#00000066] text-sm'>Anyone with your password can have access to your account, share this information with no one.</p>
            <form action="" className='flex flex-col gap-y-6'>
                <div className="">
                    <InputsCustom title='Password'
                        value=''
                        onchange=''
                        Icon={<GiPadlock />} />
                    <span className='text-sm'>Forget PassWord <Link href='/client/forgetpassword' className='text-[#218B07] font-medium'>
                        click here
                    </Link></span>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h1 className='font-semibold text-3xl'>Change password</h1>
                    <InputsCustom title='New Password'
                        value=''
                        onchange=''
                        Icon={<GiPadlock />} />
                    <InputsCustom title='Confirm Password'
                        value=''
                        onchange=''
                        Icon={<GiPadlock />} />
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

export default Security