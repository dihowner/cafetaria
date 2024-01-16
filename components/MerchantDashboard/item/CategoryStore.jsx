import Modal from '@/components/Modal'
import React, { useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
const CategoryStore = ({ isOpenModal, setIsOpenModal }) => {
    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid />
                    </span>
                </div>
            </Modal>
        </div>
    )
}

export default CategoryStore