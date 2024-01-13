import Modal from '@/components/Modal'
import React, { useRef, useState } from 'react'
import { Button } from '@mui/material'
import { LiaTimesSolid } from 'react-icons/lia'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import EditInput from '@/components/EditInput'

const EditCategory = ({ isOpenModal, setIsOpenModal, itemID }) => {
    console.log(itemID)
    const NameRef = useRef(null)
    const { EditCategory, editCategoryLoading } = mealsfetch()

    const params = itemID?._id
    const mealId = itemID?.meal
    const edit = async (e) => {
        e.preventDefault()
        const name = {
            name: NameRef?.current?.value
        }
        await EditCategory(name, params, mealId)
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
                <form
                    onSubmit={edit}
                    className="flex flex-col justify-center items-center w-full gap-y-6">
                    <h1 className='text-3xl text-[#218B07] font-[700] text-center'>Edit {itemID?.name} Category</h1>

                    <EditInput title={'Category Name'}
                        reff={NameRef}
                        defaultValue={itemID?.name}
                        type={'text'}
                    />


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
                            {
                                editCategoryLoading ? 'Loading' :
                                    'Edit Category'}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default EditCategory