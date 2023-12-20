"use client"
import Modal from '@/components/Modal'
import Link from 'next/link';
import React from 'react'
// Link
import { FaShoppingCart } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { LiaTimesSolid } from 'react-icons/lia'
const AdditemModal = ({ isOpenModal, setIsOpenModal }) => {
    return (
        <div>
            <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-xl' />
                    </span>
                    <h1 className='text-[#218B07] text-lg '>Select your merchant type</h1>
                    <Link href='/vendor/items/add-item' className="flex gap-x-4 items-center text-xl font-semibold cursor-pointer">
                        <span><FaShoppingCart /></span>
                        <p>Groceries</p>
                    </Link>
                    <Link href='/vendor/items/add-Item'  className=" flex gap-x-4 items-center text-xl font-semibold cursor-pointer">
                        <span><IoRestaurant /></span>
                        <p>Restaurant</p>
                    </Link>

                </div>
            </Modal>
        </div>
    )
}

export default AdditemModal