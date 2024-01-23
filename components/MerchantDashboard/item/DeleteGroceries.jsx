import AppLoader from '@/components/AppLoader'
import Modal from '@/components/Modal'
import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { Button } from '@mui/material'
import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

const DeleteGroceries = ({ isOpenModal, setIsOpenModal, itemID }) => {
    console.log(itemID)
    const { deleteGroceries } = groceriesFetch()
    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-sm' />
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-y-6">
                    <h1 className='text-lg text-center'>Are you sure you want to delete {itemID?.name}</h1>
                    <div className="flex justify-center items-center w-full gap-x-4">
                        <Button sx={{
                            backgroundColor: '#218B07',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#218B07',
                            },
                        }}
                            onClick={() => {
                                deleteGroceries(itemID?._id, setIsOpenModal)
                            }}
                        >
                            {'yes'}
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: '#FF9C06',
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#FF9C06',
                                },
                            }}
                            onClick={() => setIsOpenModal(false)}
                        >No</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteGroceries