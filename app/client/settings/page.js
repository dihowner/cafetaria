'use client'
import Account from '@/components/ClientDasboard/Settings/Account'
import Security from '@/components/ClientDasboard/Settings/Security'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import {
  useDetailsMutation,
  useUserdetailsMutation,
} from '@/redux/Vendor/detailsApiSlice'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import AppLoader from '@/components/AppLoader'
import { logout } from '@/user/authSlice'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'

const page = () => {
  const [error, setError] = useState()
  const { auth } = useSelector((state) => state.rootReducers)
  const [userdetails, { isLoading }] = useUserdetailsMutation()
  const { Details } = useSelector((state) => state.rootReducers)
  const dispatch = useDispatch()

  const router = useRouter()
  const fetchDetails = async () => {
    try {
      const response = await userdetails(auth?.token).unwrap()
      console.log(response)
      dispatch(setDetails(response))
    } catch (err) {
      // console.log(err)
      if (err.status === 401) {
        dispatch(logout())
        toast.error(err?.data?.message + ' ' + 'Please Login Again')
        router.push('/client/login')
      } else {
        toast.error(err.error)
        setError(err.error)
      }
    }
  }
  // Check if the user role is 'user', otherwise redirect to the previous page
  useEffect(() => {
    fetchDetails()
  }, [auth])
  console.log(Details?.Details)
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      {isLoading ? (
        <AppLoader color={'#FF9C06'} loading={isLoading} />
      ) : (
        <>
          {error && error ? (
            <div className=''>{error}</div>
          ) : (
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 width gap-x-4'>
              <Account />
              <Security />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default page
