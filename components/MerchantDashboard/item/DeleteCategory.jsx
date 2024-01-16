import Modal from '@/components/Modal'
import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { Button } from '@mui/material'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'

const DeleteCategory = ({ isOpenModal, setIsOpenModal, itemID }) => {
    const params = itemID?._id
    const mealId = itemID?.meal
    const { deletecategory, deleteCategoryLoading } = mealsfetch()

    const deleteCat = async () => {
        await deletecategory(params, mealId)
        setIsOpenModal(false)
    }
    console.log(itemID)
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
                    <h1 className='text-lg md:text-xl text-center'>Are you sure you want to delete <b>{itemID?.name}</b> category?</h1>

                    <div className="flex justify-center items-center w-full gap-x-4">
                        <Button sx={{
                            backgroundColor: '#218B07',
                            color: 'white',
                            border: '##218B07solid 1px',
                            fontWeight: "bold",
                            textTransform: 'capitalize', fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: '#218B07',
                            },
                        }}
                            onClick={() => deleteCat()}
                        >Yes</Button>
                        <Button sx={{
                            backgroundColor: '#FF9C06',
                            color: 'white',
                            fontWeight: "bold",
                            // border: ' solid 1px',
                            fontSize: '1rem',
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: '#FF9C06',
                            },
                        }}
                            onClick={() => setIsOpenModal(false)}>No</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteCategory