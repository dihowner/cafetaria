'use client'
import CustomButton from '@/components/CustomButton'
import React, { useEffect, useState } from 'react'
import { BsBank } from 'react-icons/bs'
import { BiMoneyWithdraw } from 'react-icons/bi'
import Modal from '@/components/Modal'
import InputsCustom from '@/components/InputsCustom'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux'

import { BanksFetch } from '@/components/Utilis/Fetch/BankFetch'

const BankSetUp = () => {
    const { banks } = useSelector((state) => state.rootReducers)
    const [bank_code, setBank_code] = useState()
    const [bankAccount, setBankAccount] = useState()
    const [bankAccount_name, setBankAccount_name] = useState()
    const [transactionPin, setTransactionPin] = useState()
    const { Allbanks, verifyBank, fetchBankLoading } = BanksFetch()
    const options = banks?.banks?.map((bank) => ({ label: bank.bank_name, value: bank.bank_code })) || [];
    const handleBankChange = (event, value) => {
        if (value) {
            setBank_code(value.value);
        } else {
            setBank_code(null);
        }
    };
    const data = {
        bank_code: bank_code,
        account_number: bankAccount
    }

    const info={
        bank_code: bank_code,
        account_number: bankAccount,
        account_name:bankAccount_name,
        transact_pin:transactionPin
    }
    useEffect(() => {
        Allbanks()
    }, [])
    useEffect(() => {
        if (bankAccount?.length === 10) {
            verifyBank(data, setBankAccount_name);
        }
    }, [bankAccount]);
    return (
        <div className='w-full border p-4 flex flex-col gap-y-8 '>
            <h1 className='font-[700] text-3xl'>Bank account information</h1>
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
                    <input type="text" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Account number ' value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-6 py-3 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-3 flex justify-center items-center rounded-lg'>
                        <BsBank className='text-3xl w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Account name ' value={bankAccount_name} />
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-6 py-3 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-3 flex justify-center items-center rounded-lg'>
                        <BsBank className='text-3xl w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Account name ' value={transactionPin} onChange={(e)=>setTransactionPin(e.target.value)} />
                </div>
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