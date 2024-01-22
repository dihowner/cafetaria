import AppLoader from '@/components/AppLoader'
import Modal from '@/components/Modal'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { Button } from '@mui/material'
import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

const DeleteGroceries = ({ isOpenModal, setIsOpenModal, itemID }) => {
    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>

            </Modal>
        </div>
    )
}

export default DeleteGroceries