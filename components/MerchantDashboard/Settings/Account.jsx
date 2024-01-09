import React, { useRef, useState } from 'react'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { FaPhoneSquare, FaRegUser } from "react-icons/fa";
import CustomButton from '@/components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import EditInput from '@/components/EditInput';
import TypeOfVendor from './Business/TypeOfVendor';
const Account = () => {
    const { vendorDetails } = useSelector((state) => state.rootReducers)
    const [editMode, setEditMode] = useState(false);
    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancelClick = () => {
        setEditMode(false);
    };
    const details = vendorDetails?.vendorDetails
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const storeNameRef = useRef(null)

    return (
        <div className='flex flex-col gap-y-4 border p-6'>
            <h1 className='font-semibold text-3xl'>Account information</h1>
            <p className='text-[#00000066] text-sm'>These are your public information, be careful what u share</p>
            <form action="" className='flex flex-col gap-y-16'>
                <div className="flex flex-col gap-y-3 w-full">
                    <div className=' flex flex-col w-full'>
                        <label htmlFor="name">{'Email Address'}</label>
                        <div className="flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] relative ">
                            <input type={'text'}
                                defaultValue={details?.user?.email} className='w-full outline-none border-none bg-transparent'
                                disabled
                            />
                        </div>
                    </div>
                    {/* <EditInput title='Email Address'
                        ref={emailRef}
                        defaultValue={details?.user?.email}
                        Icon={<HiOutlineEnvelope />}
                        disabled={!editMode} /> */}
                    <EditInput title='Store name'
                        ref={storeNameRef}
                        defaultValue={details?.store_name}
                        Icon={<FaRegUser />}
                        disabled={!editMode} />
                    <EditInput title='phone Number'
                        ref={phoneRef}
                        defaultValue={details?.user?.mobile_number
                        }
                        type={'tel'}
                        Icon={<FaPhoneSquare />}
                        disabled={!editMode} />
                    <div className=' flex md:justify-end w-[80%]'>
                        <div className='flex gap-x-6 border w-full py-4 px-4'>
                            <div className='w-24 h-24'>
                                <img
                                    src='/Images/Rectangle 86.png'
                                    alt=''
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <h6>Store picture</h6>
                                <div className='flex gap-x-4 '>
                                    <CustomButton
                                        title='Change picture'
                                        containerStyles='bg-[#218B07] text-white flex justify-center items-center rounded-[5px] px-2 py-3'
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <TypeOfVendor />
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="" className='font-bold'>Business description</label>
                        <div className="bg-[#F5F5F5]  w-[100%] sm:w-[70%] md:w-[70%] rounded-xl py-4 px-2 ">
                            <textarea name="" id="" cols="30" rows="8" className='w-full bg-transparent outline-none border-0' placeholder='A short description of your business'></textarea>

                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center gap-x-4">
                    {!editMode ? (
                        <div
                            className='bg-[#218B07] text-white flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2'
                            onClick={handleEditClick}
                        >Edit</div>
                    ) : (
                        <>
                            <CustomButton
                                title={'Save'}
                                containerStyles='bg-[#218B07] text-white flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2'
                                type='submit'
                            // handleClick={handleSaveClick}
                            />
                            <CustomButton
                                title='Cancel'
                                containerStyles='border text-black border-black flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2'
                                type='button'
                                handleClick={handleCancelClick}
                            />
                        </>
                    )}
                </div>

            </form>
        </div>
    )
}

export default Account