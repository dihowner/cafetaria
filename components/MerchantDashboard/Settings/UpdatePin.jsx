import React, { useState } from 'react'
import InputsCustom from '@/components/InputsCustom'
import Button from '@mui/material/Button'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { BanksFetch } from '@/components/Utilis/Fetch/BankFetch';
import AppLoader from '@/components/AppLoader';

const UpdatePin = () => {
    const [currentPin, setCurrentPin] = useState()
    const [Newpin, setNewPin] = useState()
    const [cNewpin, setCNewPin] = useState()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { updatePin, loading } = BanksFetch()
    const togglePassVisibility = () => {
        setPasswordVisible((prevVisibility) => !prevVisibility);
    };

    const data = {
        current_pin: currentPin,
        new_pin: Newpin,
        confirm_pin: cNewpin
    }
    const handleUpdatePin = async (e) => {
        e.preventDefault()
        await updatePin(data)
        setCNewPin('')
        setNewPin('')
        setCurrentPin('')
    }
    return (
        <div className='w-full border p-4 flex flex-col gap-y-8 '><h1 className='font-[700] text-lg'>Create payment pin</h1>
            {/* {loading && <AppLoader />} */}
            <form className="flex flex-col gap-y-4" onSubmit={handleUpdatePin}>
                <span className='text-[#218B07] text-sm'>Please only Enter numbers</span>
                <div className=' flex flex-col w-full'>
                    <label htmlFor="name">{"Current Pin"}</label>
                    <div className="flex gap-x-2 items-center px-4 py-4 text-sm border-2 rounded-[8px] relative ">
                        {/* <span>{}</span> */}
                        <input type={passwordVisible ? 'number' : 'password'} value={currentPin} onChange={(e) => {
                            const inputValue = e.target.value;
                            // Enforce maximum length (e.g., 6 digits)
                            setCurrentPin(inputValue.slice(0, 6));
                        }} placeholder={'Enter Your Pin'} className='text-sm w-full outline-none border-none bg-transparent'
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

                <div className=' flex flex-col w-full text-sm'>
                    <label htmlFor="name">{"New Pin"}</label>
                    <div className="flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] relative ">
                        {/* <span>{}</span> */}
                        <input type={passwordVisible ? 'number' : 'password'} value={Newpin} onChange={(e) => {
                            const inputValue = e.target.value;
                            // Enforce maximum length (e.g., 6 digits)
                            setNewPin(inputValue.slice(0, 6));
                        }
                        } placeholder={'Enter Your Pin'} className=' text-smw-full outline-none border-none bg-transparent'
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

                <div className=' flex flex-col w-full text-sm'>
                    <label htmlFor="name">{"New Pin"}</label>
                    <div className="flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] relative ">
                        {/* <span>{}</span> */}
                        <input type={passwordVisible ? 'number' : 'password'} value={cNewpin} onChange={(e) => {
                            const inputValue = e.target.value;
                            // Enforce maximum length (e.g., 6 digits)
                            setCNewPin(inputValue.slice(0, 6));
                        }} placeholder={'Enter Your Pin'} className='text-sm w-full outline-none border-none bg-transparent'
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
                <div className=' flex justify-end w-full'>
                    <Button
                        sx={{
                            backgroundColor: '#218B07',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#218B07',
                            },
                        }}
                        type='submit'
                    >
                        {loading ? 'loading' : '   Update Pin'}

                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePin