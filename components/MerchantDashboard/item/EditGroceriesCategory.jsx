
import Modal from '@/components/Modal'
import React, { useState, useRef } from 'react'
import { Button } from '@mui/material'
import { LiaTimesSolid } from 'react-icons/lia'
import EditInput from '@/components/EditInput'
import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch'
const EditGroceriesCategory = ({ isOpenModal, setIsOpenModal, itemID }) => {
    console.log(itemID)
    const { editCategory, editGroceriesCategoryLoading } = groceriesFetch()
    const categoryRef = useRef(null)
    const edit = async (e) => {
        const data = {
            name: categoryRef?.current?.value
        }
        e.preventDefault()
        await editCategory(data, itemID?._id)
        setIsOpenModal(false)
    }
    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-sm' />
                    </span>
                </div>
                <form onSubmit={edit} className="flex flex-col justify-center items-center w-full gap-y-6">
                    <h1 className='text-xl text-[#218B07] font-[700] text-center'>Edit {itemID?.name} Category</h1>
                    <div className="w-full flex justify-center items-center">
                        <EditInput reff={categoryRef}
                            defaultValue={itemID?.name}
                            title={'category name'}
                        />
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
                            {editGroceriesCategoryLoading ? 'loading' : 'Edit Category'}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default EditGroceriesCategory