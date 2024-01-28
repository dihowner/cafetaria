import InputsCustom from '@/components/InputsCustom'
import React, { useState, useRef } from 'react'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { FaPhoneSquare, FaRegUser } from "react-icons/fa";
import CustomButton from '@/components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import EditInput from '@/components/EditInput';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { useUserdetailsMutation } from '@/redux/Vendor/detailsApiSlice'

const Account = () => {
    const { Details } = useSelector((state) => state.rootReducers)
    // console.log(Details)
    const [editMode, setEditMode] = useState(false);

    const handleEditClick = () => {
        setEditMode(true);
    };
    const handleCancelClick = () => {
        setEditMode(false);
    };
    const NameRef = useRef(null)
    const addressRef = useRef(null)
    const phoneRef = useRef(null)
    const [userdetails, { isLoading }] = useUserdetailsMutation()
    const router = useRouter()
    const fetchDetails = async () => {
        try {
            const response = await userdetails(auth?.token).unwrap()
            dispatch(setDetails(response))
        } catch (err) {
            // console.log(err)
            if (err.status === 401) {
                dispatch(logout())
                toast.error(err?.data?.message + ' ' + 'Please Login Again')
                router.push('/client/login')
            } else {
                toast.error(err.error)
            }
        }
    }
    // Check if the user role is 'user', otherwise redirect to the previous page

    return (
        <div className='flex flex-col gap-y-4 border p-6'>
            <h1 className='font-semibold text-3xl'>Account information</h1>
            <p className='text-[#00000066] text-sm'>These are your public information, be careful what u share</p>
            <form action="" className='flex flex-col gap-y-16'>
                <div className="flex flex-col gap-y-3 w-full">
                    <div className=' flex flex-col w-full text-sm'>
                        <label htmlFor="name">{'Email Address'}</label>
                        <div className="flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] relative ">
                            <input type={'text'}
                                defaultValue={Details?.Details?.email} className='w-full outline-none border-none bg-transparent' disabled
                            />
                        </div>
                    </div>
                    <EditInput title='Name'
                        reff={NameRef}
                        defaultValue={Details?.Details?.name}
                        Icon={<FaRegUser />}
                        disabled={!editMode} />
                    <EditInput title='Phone Number'
                        reff={phoneRef}
                        defaultValue={Details?.Details?.mobile_number
                        }
                        type={'tel'}
                        Icon={<FaPhoneSquare />}
                        disabled={!editMode} />
                </div>
                <div className="w-full flex items-center gap-x-4">
                    {!editMode ? (
                        <div
                            className='bg-[#FF9C06] text-white flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4 w-1/2 text-sm'
                            onClick={handleEditClick}
                        >Edit</div>
                    ) : (
                        <>
                            <CustomButton
                                title={'update'}
                                containerStyles='bg-[#FF9C06] text-white flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4 w-1/2 text-sm'
                                type='submit'
                            // handleClick={() => edit()}
                            />
                            <CustomButton
                                title='Cancel'
                                containerStyles='border text-black border-black flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2 text-sm'
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