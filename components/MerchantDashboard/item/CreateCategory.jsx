import InputsCustom from '@/components/InputsCustom'
import Modal from '@/components/Modal'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { LiaTimesSolid } from 'react-icons/lia'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
const CreateCategory = ({ isOpenModal, setIsOpenModal, itemID }) => {
    const [name, setName] = useState()
    const { createMealCategory, createCategoryLoading } = mealsfetch()
    const mealId = itemID
    // console.log(itemID)
    const data={
        name:name
    }
    const createMeal = async (e) => {
        e.preventDefault()
        await createMealCategory(data, mealId)
        setName('')
        setIsOpenModal(false)
    }
    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-xl' />
                    </span>
                </div>
                <form onSubmit={createMeal} className="flex flex-col justify-center items-center w-full gap-y-6">
                    <h1 className='text-3xl text-[#218B07] font-[700] text-center'>Create Category</h1>
                    <div className="w-full flex justify-center items-center">
                        <InputsCustom title={'Category Name'}
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
                            {createCategoryLoading ? 'Loading' : 'Create Category'}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default CreateCategory