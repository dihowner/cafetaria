import InputsCustom from '@/components/InputsCustom'
import Modal from '@/components/Modal'
import Upload from '@/components/Upload'
import React, { useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
const StoreCreation = ({ isOpenModal, setIsOpenModal }) => {
    const { auth } = useSelector((state) => state.rootReducers);
    const [loading, setLoading] = useState()
    const [description, setDescription] = useState()
    const [mealImage, setMealImage] = useState()
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const createMart = async (e) => {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData()
        formData.append('description', description)
        formData.append('image', mealImage) // Assuming mealImage is a File object
        formData.append('name', name)
        formData.append('address', address)
        await axios
            .post(
                'https://cafeteria-ekep.onrender.com/api/marts/add',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/formData',
                        Accept: 'Application/json',
                        Authorization: `Bearer ${auth.token}`,
                    },
                }
            )
            .then((response) => {
                setLoading(false)
                toast.success(response.data.message)
                // console.log(response)
            })
            .catch((err) => {
                setLoading(false)
                toast.error(err?.response?.data?.message || err.error);
                // console.error(error)
            })
    }
    return (
        <div >
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid />
                    </span>
                </div>
                <div className="flex justify-center items-center gap-2 flex-col">
                    <h1 className='text-lg text-[#218B07] font-semibold'>Create a store</h1>
                    <div className='flex justify-center flex-col items-center width'>
                        <form action="" onSubmit={createMart} className='w-full flex justify-center item gap-y-3 flex-col'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <Upload mealImage={setMealImage} />
                                <div className='flex flex-col gap-y-3'>
                                    <InputsCustom
                                        title={'Store Name'}
                                        type={'text'}
                                        value={name}
                                        onchange={setName}

                                    />
                                    <InputsCustom
                                        title={'description'}
                                        type={'text'}
                                        value={description}
                                        onchange={setDescription}
                                    />
                                    <InputsCustom
                                        title={'Address'}
                                        type={'text'}
                                        value={address}
                                        onchange={setAddress}
                                    />
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
                                    {loading ? 'Loading' : 'Create Store'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default StoreCreation