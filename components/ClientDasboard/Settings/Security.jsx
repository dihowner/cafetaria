import InputsCustom from '@/components/InputsCustom'
import React, { useState } from 'react'
import { GiPadlock } from 'react-icons/gi'
import Link from 'next/link'
import CustomButton from '@/components/CustomButton';
import { useChangePasswordMutation } from '@/redux/changePassSlice';
import { toast } from 'react-toastify';
const Security = () => {
    const [currentPass, setCurrentPass] = useState()
    const [NewPass, setNewPass] = useState()
    const [cNewPass, setCNewPass] = useState()
    const [editMode, setEditMode] = useState(false);
    const [changePassword, { isLoading: changePasswordLoading }] = useChangePasswordMutation()
    const [saveLoading, setSaveLoading] = useState(false);
    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancelClick = () => {
        setEditMode(false);
    };
    const token =  typeof window !== 'undefined' && localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))
   
    const data = {
        current_passwor: currentPass,
        new_password: NewPass,
        confirm_password: cNewPass
    }
    const handleSaveClick = async (e) => {
        e.preventDefault()
        try {
            setSaveLoading(true);
            await changePassword(data,token).unwrap()
            toast.success('PassWord Changed Successfully')
            setEditMode(false);

        } catch (err) {
            toast.error(err?.data?.message || err.error);

        } finally {
            setSaveLoading(false);
        }
        // Perform save logic here
    };
    return (
        <div className='flex flex-col gap-y-4 border p-6'>
            <h1 className='font-semibold text-3xl'>Security</h1>
            <p className='text-[#00000066] text-sm'>Anyone with your password can have access to your account, share this information with no one.</p>
            <form action="" className='flex flex-col gap-y-6' onSubmit={handleSaveClick} >
                <div className="">
                    <InputsCustom title='Password'
                        value={currentPass}
                        onchange={setCurrentPass}
                        Icon={<GiPadlock />}
                        type='password'

                        disabled={!editMode} />
                    <span className='text-sm'>Forget PassWord <Link href='/client/forgetpassword' className='text-[#218B07] font-medium'>
                        click here
                    </Link></span>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h1 className='font-semibold text-3xl'>Change password</h1>
                    <InputsCustom title='New Password'
                        value={NewPass}
                        onchange={setNewPass}
                        type='password'
                        Icon={<GiPadlock />}
                        disabled={!editMode} />
                    <InputsCustom title='Confirm Password'
                        value={cNewPass}
                        onchange={setCNewPass}
                        type='password'
                        Icon={<GiPadlock />}
                        disabled={!editMode} />
                </div>
                <div className="w-full flex items-center gap-x-4">
                    {!editMode ? (
                        <div
                            className='bg-[#FF9C06] text-white flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2'
                            onClick={handleEditClick}
                        >Edit</div>
                    ) : (
                        <>
                            <CustomButton
                                title={changePasswordLoading ? 'please wait' : 'Save'}
                                containerStyles='bg-[#FF9C06] text-white flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2'
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

export default Security