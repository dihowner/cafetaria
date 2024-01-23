'use client'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Editmeal from '@/components/MerchantDashboard/item/Editmeal'
import DetailsMeal from '@/components/MerchantDashboard/item/DetailsMeal'

const page = ({ params }) => {
    const mealId = params?.id?.[params?.id?.length - 1];
    // console.log(mealId)
    const router = useRouter()
    const { getDetails, DetailsLoading } = mealsfetch()
    const [details, setDetails] = useState(null)
    useEffect(() => {
        getDetails(setDetails, mealId)
    }, [mealId])
    console.log(details)
    const pathname = usePathname()
    if (pathname.includes('edit')) {
        return <><Editmeal mealId={mealId} details={details} DetailsLoading={DetailsLoading} /></>;
    }
    if (pathname.includes('details')) {
        return (
            <DetailsMeal mealId={mealId} details={details} DetailsLoading={DetailsLoading} />
        );
    }
    return null
}


export default page