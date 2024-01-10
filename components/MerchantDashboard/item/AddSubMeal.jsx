import Modal from '@/components/Modal'
import React, { useState } from 'react'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { Button } from '@mui/material'

import { LiaTimesSolid } from 'react-icons/lia'
import InputsCustom from '@/components/InputsCustom'
const AddSubMeal = ({ isOpenModal, setIsOpenModal, itemID }) => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    // const [name, setName] = useState()
    const status = [
        { value: true, status: 'Active' },
        { value: false, status: 'Not Active' },
    ]
    const [is_available, setIs_available] = useState(true)

    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)} >
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-xl' />
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-y-6">
                    <h1 className='text-3xl text-[#218B07] font-[700] text-center'>Add Submeals</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <InputsCustom title={'Item Name'}
                            type={'text'}
                            value={name}
                            onchange={setName} />
                        <InputsCustom title={'Price'}
                            type={'number'}
                            value={price}
                            onchange={setPrice} />
                        <div className='flex flex-col w-full'>
                            <label htmlFor=''>Availability</label>
                            <select
                                value={is_available}
                                onChange={(e) => setIs_available(e.target.value)}
                                className='flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] outline-none'
                            >
                                {status.map((item, index) => (
                                    <option key={index} value={item.value} className='capitalize'>
                                        {item.status}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <InputsCustom title={'Item Name'}
                            type={'text'}
                            value={name}
                            onchange={setName} />
                    </div>
                    <div className=' flex justify-center w-full'>
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
                            {'Add Sub-Meal'}
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default AddSubMeal