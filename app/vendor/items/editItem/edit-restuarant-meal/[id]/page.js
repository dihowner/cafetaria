'use client'

import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { useGetMealDetailsMutation } from '@/redux/Vendor/getMealApiSlice'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const page = () => {
  const router = useRouter()
  const status = [
    { value: true, status: 'Active' },
    { value: false, status: 'Not Active' },
  ]
  const [details, setDetails] = useState(null)
  const { getDetails } = mealsfetch()
  useEffect(() => {
    const mealId = router.query.id

    // Pass the 'id' to the getDetails function
    getDetails(setDetails, mealId)
  }, [])
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      {' '}
      <form
        action=''
        className='width flex flex-col gap-y-8 justify-center items-center '
      >
        <div className=' w-full grid grid-cols-2 gap-x-4'></div>
      </form>
    </div>
  )
}

export default page
