'use client'

import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from '@mui/material/Button'
import { LiaTimesSolid } from 'react-icons/lia'

const page = ({ params }) => {
    const mealId = params?.id
    const router = useRouter()
    const { getDetails, DetailsLoading } = mealsfetch()
    return (
        <div className='flex justify-center flex-col items-center w-full'>
            <div className='width flex flex-col gap-y-8 justify-center items-center '>
                <div className="flex justify-between items-center w-full">
                    <div className="">
                        <span className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md text-white cursor-pointer'
                            onClick={() => router.back()}>
                            <LiaTimesSolid className='text-xl' />
                        </span>
                        <div className="">
                            <h1></h1>
                            <p></p>
                        </div>
                    </div>

                    <div className="">
                        <Button>
                            Delete
                        </Button>
                        <Button>
                            Edit
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default page