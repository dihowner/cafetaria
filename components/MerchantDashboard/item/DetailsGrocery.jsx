
import EditInput from '@/components/EditInput'
import Modal from '@/components/Modal'
import Upload from '@/components/UploadEdit'
import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import LoaderTwo from '@/components/Utilis/LoaderTwo'
import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { useSelector, useDispatch } from 'react-redux'
const DetailsGrocery = ({ isOpenModal, setIsOpenModal, itemID }) => {
    const { GroceriesCategory } = useSelector((state) => state.rootReducers)
    const categories = GroceriesCategory?.category
    const status = [
        { value: true, status: 'Active' },
        { value: false, status: 'Not Active' },
    ]
    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 py-8 px-3 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-sm' />
                    </span>
                    <div className='flex justify-center flex-col items-center w-full gap-y-4'>
                        <h1 className='text-lg text-[#218B07] font-[700] text-center'>Details of {itemID?.name} </h1>
                        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3'>
                            <div className="">
                                <img src={itemID?.image} alt="item image" />
                            </div>
                            <div className="w-full">
                                <div className='  w-full flex flex-col md:flex-row justify-between gap-x-2 gap-y-2 items-center'>
                                    <EditInput
                                        title={'Item Name'}
                                        type={'text'}
                                        defaultValue={itemID?.name}
                                    />
                                    <EditInput
                                        title={'Price'}
                                        type={'number'}
                                        defaultValue={itemID?.unitPrice}
                                    />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor='' className='text-sm'>Availability</label>
                                    <select
                                        disabled
                                        defaultValue={itemID?.isAvailable}
                                        className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] outline-none bg-transparent'
                                    >
                                        {status.map((item, index) => (
                                            <option key={index} value={item.value} className='capitalize'>
                                                {item.status}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor=''>Category</label>

                                    <select
                                        defaultValue={itemID?._id}
                                        disabled
                                        // value={categoryId}
                                        // onChange={() => setCategoryId(e?.target?.value)}
                                        className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] outline-none bg-transparent'
                                    >
                                        {categories &&
                                            categories.map((item, index) => (
                                                <option
                                                    key={index}
                                                    value={item._id}
                                                    className='capitalize text-sm'
                                                >
                                                    {item?.name}
                                                </option>
                                            ))}
                                        {/* <option value={categoryDetails?._id} className='capitalize'>
                                            {categoryDetails?.name}
                                        </option> */}

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DetailsGrocery