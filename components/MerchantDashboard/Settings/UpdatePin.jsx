import React, { useState } from 'react'
import InputsCustom from '@/components/InputsCustom'
import Button from '@mui/material/Button'

const UpdatePin = () => {
    const [currentPin, setCurrentPin] = useState()
    const [Newpin, setNewPin] = useState()
    const [cNewpin, setCNewPin] = useState()
       const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassVisibility = () => {
        setPasswordVisible((prevVisibility) => !prevVisibility);
    };
    return (
        <div className='w-full border p-4 flex flex-col gap-y-8 '><h1 className='font-[700] text-3xl'>Create payment pin</h1>
            <form className="flex flex-col gap-y-4">
                <span className='text-[#218B07]'>Please only Enter numbers</span>
                 <div className=' flex flex-col w-full'>
            <label htmlFor="name">{"Current Pin"}</label>
            <div className="flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] relative ">
                {/* <span>{}</span> */}
                <input type={'number'} value={currentPin} onChange={(e)=>setCurrentPin(e.target.value)} placeholder={'Enter Your Pin'} className='w-full outline-none border-none bg-transparent'
         />
                {type === 'number' && (
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
                )}
            </div>

        </div>

         <div className=' flex flex-col w-full'>
            <label htmlFor="name">{"New Pin"}</label>
            <div className="flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] relative ">
                {/* <span>{}</span> */}
                <input type={'number'} value={Newpin} onChange={(e)=>setNewPin(e.target.value)} placeholder={'Enter Your Pin'} className='w-full outline-none border-none bg-transparent'
         />
                {type === 'number' && (
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
                )}
            </div>

        </div>
    
         <div className=' flex flex-col w-full'>
            <label htmlFor="name">{"New Pin"}</label>
            <div className="flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] relative ">
                {/* <span>{}</span> */}
                <input type={'number'} value={cNewpin} onChange={(e)=>setCNewPinn(e.target.value)} placeholder={'Enter Your Pin'} className='w-full outline-none border-none bg-transparent'
         />
                {type === 'number' && (
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
                )}
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
                        Update Pin
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePin