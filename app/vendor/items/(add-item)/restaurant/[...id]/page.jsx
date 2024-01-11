'use client'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { LiaTimesSolid } from 'react-icons/lia'
import Editmeal from '@/components/MerchantDashboard/item/Editmeal'

const page = ({ params }) => {
    const mealId = params?.id?.[params?.id?.length - 1];
    console.log(mealId)
    const router = useRouter()
    const { getDetails, DetailsLoading } = mealsfetch()
    const [details, setDetails] = useState(null)
    useEffect(() => {
        getDetails(setDetails, mealId)
    }, [mealId])
    const pathname = usePathname()
    if (pathname.includes('edit')) {
        return <><Editmeal mealId={mealId} details={details} DetailsLoading={DetailsLoading} /></>;
    }
    if (pathname.includes('details')) {
        return (
            <div className='flex justify-center flex-col items-center w-full'>
                <div className='width flex flex-col gap-y-8 justify-center items-center '>
                    <div className='flex justify-between items-center w-full'>
                        <div className=''>
                            <span
                                className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md text-white cursor-pointer'
                                onClick={() => router.back()}
                            >
                                <LiaTimesSolid className='text-xl' />
                            </span>
                            <div className=''>
                                {/* <h1>{title}</h1>
                                <p>{description}</p> */}
                            </div>
                        </div>

                        <div className=''>
                            <Button>Delete</Button>
                            <Button>Edit</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null
}


export default page