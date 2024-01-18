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
import { useRef } from 'react'
import { FaNairaSign } from "react-icons/fa6";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const WithdrawSec = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [Pin, setPin] = useState()
    const openModal = () => {
        setIsOpenModal(true)
    }
    const togglePassVisibility = () => {
        setPasswordVisible((prevVisibility) => !prevVisibility);
    };
    const { Details } = useSelector((state) => state.rootReducers)
    const bankDetails = Details?.Details?.bank
    const amountTowithdrawRef = useRef()
    const amount = amountTowithdrawRef?.current?.value
    const withdrawMoney = () => {
        console.log(amount)
    }
    return (
        <div className='w-full md:w-[50%] border p-4 flex flex-col gap-y-8 '>
            <div className="border w-[100%] sm:w-[80%] md:w-[50%] px-4 py-4 text-sm flex items-center gap-x-6 rounded-lg">
                <span className='w-[20%] border p-2 flex justify-center items-center rounded-lg'>
                    <BsBank className='text-sm w-full' />
                </span>
                <p>Bank account</p>
            </div>
            <div className="flex flex-col gap-y-4 text-sm">
                <span className='text-[#218B07]'>Enter bank details</span>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 py-4 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-2  flex justify-center items-center rounded-lg'>
                        <BsBank className='text-sm w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0 text-sm w-[80%]' placeholder='Enter Bank Name' defaultValue={bankDetails?.bankName
                    } disabled />
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 py-4 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-2 flex justify-center items-center rounded-lg'>
                        <BsBank className='text-sm w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0 text-sm  w-[80%]' placeholder='Enter Account number ' defaultValue={bankDetails?.accountNumber
                    } disabled />
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 py-4 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-2 flex justify-center items-center rounded-lg'>
                        <BsBank className='text-sm w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0  w-[80%] text-sm ' placeholder='Enter Account name ' defaultValue={bankDetails?.accountName
                    } disabled/>
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 py-4 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-2 flex justify-center items-center rounded-lg'>
                        <FaNairaSign className='text-sm w-full' />
                    </span>
                    <input type="number" className='bg-[transparent] outline-none border-0 text-sm w-[80%]' placeholder='Enter Amount' ref={amountTowithdrawRef} defaultValue={''
                    } />
                </div>
                <span>Your withdrawal would be processed within 0 to 24 hours after withdraw</span>
                <CustomButton title='Withdraw' containerStyles='text-[white] flex justify-center items-center py-2 px-2 rounded-[5px] text-sm gap-x-4 bg-[#218B07] w-[60%]'
                    Icon={<BiMoneyWithdraw />} 
                    handleClick={openModal} />
            </div>
            <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-sm' />
                    </span>
                    <div className="flex flex-col justify-center items-center w-full">
                        <h1 className='text-lg font-semibold text-[#000000CC] '>Confirm withdrawal</h1>
                        <span className='text-[#218B07] text-sm'>Please input password to withdraw</span>
                    </div>
                    <form action="" className='w-[80%] flex flex-col gap-y-8 justify-center items-center'>
                        <div className=' flex flex-col w-full'>
                            <div className="flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] relative ">
                                <span><GiPadlock /></span>
                                <input type={passwordVisible ? 'number' : 'password'} value={Pin} onChange={(e) => {
                                    const inputValue = e.target.value;
                                    // Enforce maximum length (e.g., 6 digits)
                                    setPin(inputValue.slice(0, 6));
                                }} placeholder={'Enter Your Pin'} className='w-full outline-none border-none bg-transparent'
                                    maxLength={6}
                                    onKeyDown={(e) => {
                                        // Allow only numeric input
                                        if (!/\d/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                            e.preventDefault();
                                        }
                                    }}

                                />

                                <div
                                    onClick={togglePassVisibility}
                                    className='absolute top-[40%] right-[10px] text-black cursor-pointer'
                                >
                                    {passwordVisible ? (
                                        <AiOutlineEye />
                                    ) : (
                                        <AiOutlineEyeInvisible />
                                    )}
                                </div>

                            </div>

                        </div>
                        {/* <InputsCustom
                            value=''
                            onchange=''
                            placeholder='Enter password'
                            Icon={<GiPadlock />} /> */}
                        <CustomButton title='Withdraw' containerStyles='text-[white] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 bg-[#218B07] w-[55%]'
                            Icon={<BiMoneyWithdraw />}
                            handleClick={() => withdrawMoney()} />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default WithdrawSec