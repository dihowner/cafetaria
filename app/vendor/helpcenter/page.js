'use client'
import React from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import AppLoader from '@/components/AppLoader'
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { useEffect, useState } from 'react'
import { logout } from '@/user/authSlice'
import { toast } from 'react-toastify'

const page = () => {
  const [vendordetails, { isLoading }] = useVendordetailsMutation()
  const dispatch = useDispatch()
  const [error, setError] = useState()
  const { auth } = useSelector((state) => state.rootReducers)
  const router = useRouter()
  const fetchDetails = async () => {
    try {
      const response = await vendordetails(auth?.token).unwrap()
      dispatch(setDetails(response))
    } catch (err) {
      // console.log(err)
      // toast.error(err?.data?.message + ' ' + 'Please Login Again' || err.error)
      if (err.status === 401) {
        dispatch(logout())
        toast.error(err?.data?.message + ' ' + 'Please Login Again')
        router.push('/vendor/login')
      } else {
        toast.error(err.error)
        setError(err.error)
      }
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [auth])
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      {isLoading ? (
        <AppLoader color={'#5f8357'} loading={isLoading} />
      ) : (
        <>
          {error && error ? (
            <div className=''>{error}</div>
          ) : (
            <>
              <div className='width flex justify-center items-center flex-col gap-y-12'>
                <div className='w-full md:w-[50%] h-[40px] shadow-md px-4'>
                  <input
                    type='text'
                    className='w-[100%] h-[100%] border-0 outline-none'
                    placeholder='Search anything here'
                  />
                </div>
                <div className='grid grid-cols-3 w-full  gap-x-4 '>
                  <div className='shadow-md flex justify-center flex-col items-center p-8 text-center gap-y-2'>
                    <span>
                      <AiFillClockCircle className='text-5xl text-[#218B07]' />
                    </span>
                    <h1 className='text-3xl textt-[#333333] font-semibold'>
                      Get started
                    </h1>
                    <p className=''>
                      Understanding cafeteria in and out started from the
                      onboarding
                    </p>
                  </div>
                  <div className='shadow-md flex justify-center flex-col items-center p-8 text-center gap-y-2'>
                    <span>
                      <BsChat className='text-5xl text-[#218B07]' />
                    </span>
                    <h1 className='text-3xl textt-[#333333] font-semibold'>
                      Faqs
                    </h1>
                    <p>
                      Understanding cafeteria in and out started from the
                      onboarding
                    </p>
                  </div>
                  <div className='shadow-md flex justify-center flex-col items-center p-8 text-center gap-y-2'>
                    <span>
                      <BsChat className='text-5xl text-[#218B07]' />
                    </span>
                    <h1 className='text-3xl textt-[#333333] font-semibold'>
                      Contact support
                    </h1>
                    <p className=''>
                      Understanding cafeteria in and out started from the
                      onboarding
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default page
