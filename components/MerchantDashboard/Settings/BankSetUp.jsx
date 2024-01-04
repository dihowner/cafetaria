'use client'
import CustomButton from '@/components/CustomButton'
import React, { useEffect, useState } from 'react'
import { BsBank } from 'react-icons/bs'
import { BiMoneyWithdraw } from 'react-icons/bi'
import Modal from '@/components/Modal'
import InputsCustom from '@/components/InputsCustom'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useFetchBankMutation,useVerifyAccountMutation } from '@/redux/Vendor/fetchBankApiSlice'
import { setBanks } from '@/redux/Vendor/Slices/withdrawSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const BankSetUp = () => {
    const dispatch = useDispatch();
    const { banks } = useSelector((state) => state.rootReducers)
    const [fetchBank, { isLoading }] = useFetchBankMutation()

    const [verifyAccount]=useVerifyAccountMutation()
    const [bank_code, setBank_code] = useState()
    const [bankAccount, setBankAccount] =useState()
    const Allbanks = async () => {
        try {

            const response = await fetchBank().unwrap()
            // if (isSuccess) {
            dispatch(setBanks(response))
            // }
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

    const options = banks?.banks?.map((bank) => ({ label: bank.bank_name, value: bank.bank_code })) || [];
      const handleBankChange = (event, value) => {
        if (value) {
            setBank_code(value.value);
        } else {
            setBank_code(null);
        }
    };
const data ={
    bank_code:bank_code,
    account_number:bankAccount
}
const verifyBank=async()=>{
    try {

            const response = await fetchBank().unwrap()
            // if (isSuccess) {
            dispatch(setBanks(response))
            // }
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
}
    console.log(bank_code)
    useEffect(() => {
        Allbanks()
    }, [])
    return (
        <div className='w-full border p-4 flex flex-col gap-y-8 '>
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
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 300 }}
                                 onChange={handleBankChange}
                        renderInput={(params) => <TextField {...params} label="Select your bank" />}
                    />
                
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-6 py-3 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-3 flex justify-center items-center rounded-lg'>
                        <BsBank className='text-3xl w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Account number '  value={bankAccount} onChange={(e)=>setBankAccount(e.target.value)}/>
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-6 py-3 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-3 flex justify-center items-center rounded-lg'>
                        <BsBank className='text-3xl w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Account name ' />
                </div>
                <span>Your withdrawal would be processed within 0 to 24 hours after withdraw</span>
                <CustomButton title='Save Bank Account' containerStyles='text-[white] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 bg-[#218B07] w-[60%]'
                    Icon={<BiMoneyWithdraw />}
                />
            </div>

        </div>
    )
}

export default BankSetUp



    {/* <select name="" id="" className='bg-[transparent] capitalize w-[80%]' defaultValue="defaultBank">
                        <option value="defaultBank" disabled>Select your bank</option>
                        {banks.banks && banks.banks.map((item, index) => (
                            <option value="" key={index} >{item?.bank_name}</option>
                        ))}
                    </select> */}