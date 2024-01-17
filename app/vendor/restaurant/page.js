'use client'
import CustomButton from '@/components/CustomButton'
import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { MdSwipeDownAlt } from 'react-icons/md'
import { ItemsTableData } from '@/components/Utilis/Dummy'
import AdditemModal from '@/components/MerchantDashboard/item/AdditemModal'
import ResturantItems from '@/components/MerchantDashboard/item/ResturantItems'
import AppLoader from '@/components/AppLoader'
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { useEffect, useState } from 'react'
import { logout } from '@/user/authSlice'
import { toast } from 'react-toastify'

const page = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }
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
    <div className='flex justify-center flex-col items-center w-full'>
      {isLoading ? (
        <AppLoader color={'#5f8357'} loading={isLoading} />
      ) : (
        <>
          {error && error ? (
            <div className=''>{error}</div>
          ) : (
            <>
              <div className='width flex flex-col gap-y-4 border'>
                <div className='flex justify-between  w-full md:items-center flex-col md:flex-row gap-y-6 p-2 '>
                  <div className='flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg'>
                    <span>
                      <MdSwipeDownAlt />
                    </span>
                    <span>Restuarant Items</span>
                  </div>
                  <CustomButton
                    title='Add'
                    containerStyles='text-[#218B07] flex justify-center items-center py-2 px-2 text-sm rounded-[5px] gap-x-4 border-[#218B07] border'
                    Icon={<IoIosAdd />}
                    handleClick={() => {
                      router.push('restaurant/add-meal')
                    }}
                  />
                </div>
                <div className='flex justify-between items-center bg-[#218B07] p-2'>
                  <div className='flex gap-x-2'>
                    <CustomButton
                      title='All Items 48'
                      containerStyles='text-[#218B07] flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4  bg-[white] text-sm'
                    />
                    <CustomButton
                      title='Active 31'
                      containerStyles='text-[white] flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4 border-[white] border text-sm'
                    />
                    <CustomButton
                      title='Not Active 17'
                      containerStyles='text-[white] flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4 border-[white] border text-sm'
                    />
                  </div>
                </div>
                <ResturantItems ItemsTableData={ItemsTableData} />
              </div>
              <AdditemModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
              />
            </>
          )}
        </>
      )}
    </div>
  )
}

export default page
