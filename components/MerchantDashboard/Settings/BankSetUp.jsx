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
import Button from '@mui/material/Button'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BanksFetch } from '@/components/Utilis/Fetch/BankFetch'

const BankSetUp = () => {
    const { banks } = useSelector((state) => state.rootReducers)
    const [bank_code, setBank_code] = useState()
    const [bankAccount, setBankAccount] = useState()
    const [bankAccount_name, setBankAccount_name] = useState()
    const [transactionPin, setTransactionPin] = useState()
    const { Allbanks, verifyBank, fetchBankLoading, saveBankDetails } = BanksFetch()
    const options = banks?.banks?.map((bank) => ({ label: bank.bank_name, value: bank.bank_code })) || [];
    const { Details } = useSelector((state) => state.rootReducers)
    const bankDetails = Details?.Details?.bank
    const togglePassVisibility = () => {
        setPasswordVisible((prevVisibility) => !prevVisibility);
    };
    const [passwordVisible, setPasswordVisible] = useState(false);

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

    const info = {
        bank_code: bank_code,
        account_number: bankAccount,
        account_name: bankAccount_name,
        transact_pin: transactionPin
    }
    useEffect(() => {
        if (bankDetails) {
            // setBank_code(bankDetails?.bankName || ''); // assuming bank_code is a string
            setBankAccount(bankDetails?.accountNumber || ''); // assuming account_number is a string
            setBankAccount_name(bankDetails?.accountName || '');
           // assuming transact_pin is a string
        }
        Allbanks()
    }, [bankDetails])
    const verify = () => {
        verifyBank(data, setBankAccount_name);
        // console.log(data)
    }
    const SaveBank = async (e) => {
        e.preventDefault()
        await saveBankDetails(info)

    }
    // useEffect(() => {
    //     if (bankAccount?.length === 10) {
    //         verifyBank(data, setBankAccount_name);
    //     }
    // }, []);
    return (
        <div className='w-full border p-4 flex flex-col gap-y-8 '>
            <h1 className='font-[700] text-lg'>Bank account information</h1>
            <div className="border w-[100%] sm:w-[80%] md:w-[50%] px-2 py-2 flex items-center gap-x-6 rounded-lg">
                <span className='w-[20%] border p-1 flex justify-center items-center rounded-lg text-sm'>
                    <BsBank className='text-sm w-full' />
                </span>
                <p>Bank account</p>
            </div>
            <form onSubmit={SaveBank} className="flex flex-col gap-y-4 text-sm">
                <span className='text-[#218B07]'>Enter bank details</span>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 py-3 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border text-sm p-1  flex justify-center items-center rounded-lg'>
                        <BsBank className=' w-full' />
                    </span>
                    <Autocomplete
                        value={bank_code}

                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 300 }}
                        onChange={handleBankChange}
                        renderInput={(params) => <TextField {...params} label="Select your bank" />}
                    />

                </div>
                <div className="flex gap-x-2 w-[100%]">
                    <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 text-sm py-4 flex items-center gap-x-6 rounded-lg">
                        <span className='w-[20%] border p-1 text-sm flex justify-center items-center rounded-lg'>
                            <BsBank className='text-sm w-full' />
                        </span>
                        <input type="number" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Account number ' value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
                    </div>
                    <Button
                        sx={{
                            backgroundColor: '#218B07',
                            color: '#ffffff',
                            fontSize: '.8rem',
                            '&:hover': {
                                backgroundColor: '#218B07',
                            },
                        }}
                        onClick={verify}
                    > Verify Account</Button>
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 py-4 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-1 text-sm flex justify-center items-center rounded-lg'>
                        <BsBank className=' w-full' />
                    </span>
                    <input type="text" className='bg-[transparent] outline-none border-0 text-sm w-[80%]' placeholder='Enter Account name ' value={bankAccount_name} disabled />
                </div>
                <div className="border w-[100%] sm:w-[80%] md:w-[80%] px-4 py-4 flex items-center gap-x-6 rounded-lg">
                    <span className='w-[20%] border p-1 text-sm flex justify-center items-center rounded-lg'>
                        <BsBank className=' w-full' />
                    </span>
                    <div className="flex gap-x-2 items-center rounded-[8px] relative w-[80%] ">
                        <input type={passwordVisible ? 'number' : 'password'} value={transactionPin} onChange={(e) => {
                            const inputValue = e.target.value;
                            // Enforce maximum length (e.g., 6 digits)
                            setTransactionPin(inputValue.slice(0, 6));
                        }} placeholder={'Enter Your transaction pin'} className='w-full outline-none border-none bg-transparent text-sm'
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
                    {/* <input type="number" className='bg-[transparent] outline-none border-0  w-[80%]' placeholder='Enter Your transaction pin ' value={transactionPin} onChange={(e) => setTransactionPin(e.target.value)} /> */}
                </div>
                <CustomButton title='Save Bank Account' containerStyles='text-[white] flex justify-center items-center py-2 text-sm px-2 rounded-[5px] gap-x-4 bg-[#218B07] w-[60%]'
                    type={'submit'}
                    Icon={<BiMoneyWithdraw />}
                />
            </form>

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