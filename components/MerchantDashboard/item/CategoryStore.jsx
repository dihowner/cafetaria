import Modal from '@/components/Modal'
import React, { useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import InputsCustom from '@/components/InputsCustom'
import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch';


const CategoryStore = ({ isOpenModal, setIsOpenModal }) => {
    const [name, setName] = useState()
    const { Createcategory, create_CategoryGroceriesLoading } = groceriesFetch()
    const data = {
        name: name
    }
    const create = async (e) => {
        e.preventDefault()
        await Createcategory(data)
        setName('')
    }

    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid />
                    </span>
                </div>
                <form onSubmit={create} className="flex flex-col justify-center items-center w-full gap-y-6">
                    <h1 className='text-xl text-[#218B07] font-[700] text-center'>Create Category</h1>
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
                            {create_CategoryGroceriesLoading ? 'Loading:' : 'Create Category'}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default CategoryStore