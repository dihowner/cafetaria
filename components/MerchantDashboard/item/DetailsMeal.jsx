import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import { LiaTimesSolid } from 'react-icons/lia'
import AppLoader from '@/components/AppLoader'
import CreateCategory from './CreateCategory'
import Categories from './Categories'
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
            ) : null}
            <div className='width flex flex-col gap-y-8 justify-center items-center '>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-x-4'>
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
                    <div className='flex gap-x-4'>
                        <Button sx={{
                            backgroundColor: 'transparent',
                            color: 'black',
                            border: 'black solid 1px',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                            onClick={() => router.push(`items/restaurant/meals/edit/${mealId}`)} >Edit Meal</Button>
                        <Button sx={{
                            backgroundColor: '#218B07',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#218B07',
                            },
                        }}
                            onClick={() => openCategoryModal()}>Add Categories</Button>
                    </div>
                </div>
            </div>
            <CreateCategory isOpenModal={isCategoryOpenModal} setIsOpenModal={setIsCategoryOpenModal} itemID={mealId} />
            <Categories itemID={mealId} />
        </div>
    )
}

export default DetailsMeal