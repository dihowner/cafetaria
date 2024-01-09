'use client'
import CustomButton from '@/components/CustomButton'
import React, { useEffect, useState } from 'react'
import { BsBank } from 'react-icons/bs'
import { BiMoneyWithdraw } from 'react-icons/bi'
import Modal from '@/components/Modal'
import InputsCustom from '@/components/InputsCustom'
import { GiPadlock } from 'react-icons/gi'
import { LiaTimesSolid } from 'react-icons/lia'
import { useFetchBankMutation } from '@/redux/Vendor/fetchBankApiSlice'
import { setBanks } from '@/redux/Vendor/Slices/withdrawSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
// toast
// useDispatch
const WithdrawSec = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => {
        setIsOpenModal(true)
    }
    const dispatch = useDispatch();
    const { bankDetails } = useSelector((state) => state.rootReducers)
console.log(bankDetails)
    return (
        <div className='w-full md:w-[50%] border p-4 flex flex-col gap-y-8 '>
            <div className="border w-[100%] sm:w-[80%] md:w-[50%] px-6 py-3 flex items-center gap-x-6 rounded-lg">
                <span className='w-[20%] border p-3 flex justify-center items-center rounded-lg'>
                    <BsBank className='text-3xl w-full' />
                </span>
                <p>Bank account</p>
            </div>
            <div className="flex flex-col gap-y-4">
                <span className='text-[#218B07]'>Enter bank details</span>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 py-3 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-3  flex justify-center items-center rounded-lg'>
                        <BsBank className='text-3xl w-full' />
                    </span>
                    <select name="" id="" className='bg-[transparent] capitalize w-[80%]' defaultValue="defaultBank">
                        <option value="defaultBank" disabled>Select your bank</option>
                    
                    </select>
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-6 py-3 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-3 flex justify-center items-center rounded-lg'>
                        <BsBank className='text-3xl w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Account number ' />
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-6 py-3 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-3 flex justify-center items-center rounded-lg'>
                        <BsBank className='text-3xl w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Account name ' />
                </div>
                <span>Your withdrawal would be processed within 0 to 24 hours after withdraw</span>
                <CustomButton title='Withdraw' containerStyles='text-[white] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 bg-[#218B07] w-[60%]'
                    Icon={<BiMoneyWithdraw />}
                    handleClick={openModal} />
            </div>
            <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md absolute top-0 right-0 text-white'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-xl' />
                    </span>
                    <div className="flex flex-col justify-center items-center w-full">
                        <h1 className='text-4xl font-semibold text-[#000000CC] '>Confirm withdrawal</h1>
                        <span className='text-[#218B07]'>Please input password to withdraw</span>
                    </div>
                    <form action="" className='w-[80%] flex flex-col gap-y-8 justify-center items-center'>
                        <InputsCustom
                            value=''
                            onchange=''
                            placeholder='Enter password'
                            Icon={<GiPadlock />} />
                        <CustomButton title='Withdraw' containerStyles='text-[white] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 bg-[#218B07] w-[55%]'
                            Icon={<BiMoneyWithdraw />} />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default WithdrawSec