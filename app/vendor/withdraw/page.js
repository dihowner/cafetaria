"use client"

import Table from '@/components/MerchantDashboard/Withdraw/Table'
import Topside from '@/components/MerchantDashboard/Withdraw/Topside'
import WithdrawBar from '@/components/MerchantDashboard/Withdraw/WithdrawBar'
import WithdrawSec from '@/components/MerchantDashboard/Withdraw/WithdrawSec'
import React from 'react'
import { BiMoneyWithdraw } from 'react-icons/bi'
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
              <div className='width'>
                <div className='flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg w-[40%] md:w-[20%]'>
                  <span className='text-xl'>
                    <BiMoneyWithdraw />
                  </span>
                  <span>Withdraw</span>
                </div>
              </div>
              <Topside />
              <div className='width flex gap-x-3 flex-col md:flex-row '>
                <WithdrawSec />
                <WithdrawBar />
              </div>
              <Table />
            </>
          )}
        </>
      )}
    </div>
  )
}

export default page
