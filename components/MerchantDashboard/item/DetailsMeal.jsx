import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { redirect, useRouter } from 'next/navigation'
import { LiaTimesSolid } from 'react-icons/lia'
import AppLoader from '@/components/AppLoader'
import CreateCategory from './CreateCategory'
import Categories from './Categories'
// redirect
const DetailsMeal = ({ mealId, details, DetailsLoading }) => {
    const router = useRouter()
    const [isCategoryOpenModal, setIsCategoryOpenModal] = useState(false)
    const openCategoryModal = () => {
        setIsCategoryOpenModal(true)
    }
    return (
        <div className='flex justify-center flex-col items-center w-full'>
            {DetailsLoading ? (
                <AppLoader color={'#5f8357'} loading={DetailsLoading} />
            ) : <>
                    <div className='width flex flex-col gap-y-8 justify-center items-center '>
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex items-center justify-start gap-x-4 w-[60%]'>
                                <span
                                    className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md text-white cursor-pointer'
                                    onClick={() => router.back()}
                                >
                                    <LiaTimesSolid className='text-xl' />
                                </span>
                                <div className=''>
                                    <h1 className='text-3xl text-[#444444] font-medium capitalize'>{details?.name}</h1>
                                    <p className='text-[#424242A6] capitalize'>{details?.description}</p>
                                </div>
                            </div>
                            <div className='flex sm:items-center justify-end flex-col sm:flex-row gap-y-4 gap-x-4 w-[40%]'>
                                <Button sx={{
                                    backgroundColor: 'transparent',
                                    color: 'black',
                                    border: '#0000000F solid 1px',
                                    fontWeight: "bold",
                                    textTransform: 'capitalize', fontSize: '1.2rem',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                                    onClick={() => router.replace(`items/restaurant/meals/edit/${mealId}`)} >Edit Meal</Button>
                                <Button sx={{
                                    backgroundColor: 'transparent',
                                    color: '#218B07',
                                    fontWeight: "bold",
                                    border: '#218B07 solid 1px',
                                    fontSize: '1.2rem',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                                    onClick={() => openCategoryModal()}>Add Categories</Button>
                            </div>
                        </div>
                        <Categories itemID={mealId} details={details} />
                    </div>
                    <CreateCategory isOpenModal={isCategoryOpenModal} setIsOpenModal={setIsCategoryOpenModal} itemID={mealId} />
            </>}
           

        </div>
    )
}

export default DetailsMeal