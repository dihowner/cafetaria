'use client'

import React from 'react'
import { MdNotifications } from 'react-icons/md'
import { LiaTimesSolid } from 'react-icons/lia'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
import AppLoader from '@/components/AppLoader'
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { useEffect, useState } from 'react'
import { logout } from '@/user/authSlice'
import { toast } from 'react-toastify'

// Link
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
            <div className='flex justify-between items-cente flex-col width gap-y-5 '>
              <div className='flex items-center text-sm gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg w-[40%] md:w-[20%]'>
                <span className='text-sm'>
                  <MdNotifications />
                </span>
                <span>Notifications</span>
              </div>
              <div className='w-[100%] md:w-[70%] capitalize flex gap-x-3 '>
                <span className='bg-[#E8E8E8] p-2 h-8 justify-center flex items-center rounded-md'>
                  <LiaTimesSolid className='text-sm' />
                </span>
                <div className='border-b capitalize flex flex-col gap-y-3 w-full text-sm '>
                  <div className='flex sm:flex-row flex-col justify-between md:items-center'>
                    <span className='bg-[#FF9C06] flex justify-center items-center p-2 text-white rounded-md w-[40%] md:w-[40%] lg:w-[20%] text-sm'>
                      New Order
                    </span>
                    <p>24 minutes ago</p>
                  </div>
                  <div className=''>
                    <h3 className='text-[#444444] text-sm'>
                      You just received a new order from Abayomi daniels
                    </h3>
                    <p className='text-[#00000087] text-sm'>
                      J and p bus-stop moniya ibadan, Fatokun street ,Iyanu
                      oluwa block industry | Oyo - AKINYELE | +234 8162567067
                    </p>
                  </div>
                  <div className='flex justify-end items-center'>
                    <Link
                      href={`/vendor/orders/$`}
                      className='text-[#218B07]  gap-x-1 mt-6 font-semibold flex items-center text-sm'
                    >
                      <p> view details </p>
                      <span className='text-sm'>
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='w-[100%] md:w-[70%] capitalize flex gap-x-3 '>
                <span className='bg-[#E8E8E8] p-2 h-8 justify-center flex items-center rounded-md'>
                  <LiaTimesSolid className='text-sm' />
                </span>
                <div className='border-b capitalize flex flex-col gap-y-3 w-full '>
                  <div className='flex sm:flex-row flex-col justify-between md:items-center text-sm'>
                    <span className='bg-[#FF9C06] flex justify-center items-center p-2 text-white rounded-md w-[40%] md:w-[40%] lg:w-[20%] text-sm'>
                      New Order
                    </span>
                    <p>24 minutes ago</p>
                  </div>
                  <div className='text-sm'>
                    <h3 className='text-[#444444] text-sm'>
                      You just received a new order from Abayomi daniels
                    </h3>
                    <p className='text-[#00000087] text-sm'>
                      J and p bus-stop moniya ibadan, Fatokun street ,Iyanu
                      oluwa block industry | Oyo - AKINYELE | +234 8162567067
                    </p>
                  </div>
                  <div className='flex justify-end items-center'>
                    <Link
                      href={`/vendor/orders/$`}
                      className='text-[#218B07]  gap-x-1 mt-6 font-semibold flex items-center text-sm'
                    >
                      <p className='text-sm'> view details </p>
                      <span>
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='w-[100%] md:w-[70%] capitalize flex gap-x-3 '>
                <span className='bg-[#E8E8E8] p-2 h-8 justify-center flex items-center rounded-md'>
                  <LiaTimesSolid className='text-sm' />
                </span>
                <div className='border-b capitalize flex flex-col gap-y-3 w-full text-sm'>
                  <div className='flex sm:flex-row flex-col justify-between md:items-center'>
                    <span className='bg-[#FF9C06] flex justify-center items-center p-2 text-white rounded-md w-[40%] md:w-[40%] lg:w-[20%] text-sm'>
                      New Order
                    </span>
                    <p>24 minutes ago</p>
                  </div>
                  <div className=''>
                    <h3 className='text-[#444444] text-sm'>
                      You just received a new order from Abayomi daniels
                    </h3>
                    <p className='text-[#00000087] text-sm'>
                      J and p bus-stop moniya ibadan, Fatokun street ,Iyanu
                      oluwa block industry | Oyo - AKINYELE | +234 8162567067
                    </p>
                  </div>
                  <div className='flex justify-end items-center'>
                    <Link
                      href={`/vendor/orders/$`}
                      className='text-[#218B07] text-sm gap-x-1 mt-6 font-semibold flex items-center'
                    >
                      <p className='text-sm'> view details </p>
                      <span>
                        <AiOutlineArrowRight className='text-sm' />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default page
