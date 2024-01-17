'use client'
import Account from '@/components/MerchantDashboard/Settings/Account'
import Security from '@/components/MerchantDashboard/Settings/Security'
import React, { useState } from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import { FaGreaterThan } from 'react-icons/fa6'
import CustomButton from '@/components/CustomButton'
import TimeandLocation from '@/components/MerchantDashboard/Settings/Business/TimeandLocation'
import TypeOfVendor from '@/components/MerchantDashboard/Settings/Business/TypeOfVendor'
import BankSetUp from '@/components/MerchantDashboard/Settings/BankSetUp'
import UpdatePin from '@/components/MerchantDashboard/Settings/UpdatePin'
import AppLoader from '@/components/AppLoader'
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { useEffect, useState } from 'react'
import { logout } from '@/user/authSlice'
import { toast } from 'react-toastify'

const page = () => {
  const [tab, setTab] = useState('Account information')

  const changeTab = (tab) => {
    setTab(tab)
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
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      {isLoading ? (
        <AppLoader color={'#5f8357'} loading={isLoading} />
      ) : (
        <>
          {error && error ? (
            <div className=''>{error}</div>
          ) : (
            <>
              <div className='width flex flex-col gap-y-4'>
                <div className='flex justify-between md:items-center flex-col md:flex-row gap-y-6 w-full p-4  '>
                  <div className='flex flex-col gap-y-8 w-full md:w-1/2'>
                    <div className='flex items-center text-sm  gap-x-4 capitalize p-2 border-2 bg-[#FAFAFA] rounded-lg w-[45%] md:w-[20%]'>
                      <span>
                        <MdOutlineSettings />
                      </span>
                      <span>Settings</span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center gap-x-5 w-full'>
                  <div className='flex justify-between items-center gap-x-5 md:w-[80%] w-full'>
                    <h1
                      onClick={(e) => changeTab('Account information')}
                      className={`${
                        tab === 'Account information'
                          ? 'text-sm md:text-base text-[#218B07] font-semibold text-center cursor-pointer border-[#218B07] border p-2'
                          : 'text-sm md:text-base text-[#00000033] font-semibold text-center cursor-pointer'
                      }`}
                    >
                      Account information{' '}
                    </h1>
                    <h1
                      onClick={(e) => changeTab('Security information')}
                      className={`${
                        tab === 'Security information'
                          ? 'text-sm md:text-base text-[#218B07] font-semibold text-center cursor-pointer border-[#218B07] border p-2'
                          : 'text-sm md:text-base text-[#00000033] font-semibold text-center cursor-pointer'
                      }`}
                    >
                      Security information
                    </h1>
                    <h1
                      onClick={(e) => changeTab('Withdrawal information')}
                      className={`${
                        tab === 'Withdrawal information'
                          ? 'text-sm md:text-base text-[#218B07] font-semibold text-center cursor-pointer border-[#218B07] border p-2'
                          : 'text-sm md:text-base text-[#00000033] font-semibold text-center cursor-pointer'
                      }`}
                    >
                      Withdrawal information
                    </h1>
                  </div>
                </div>
              </div>
              <>
                {tab === 'Account information' && (
                  <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 width gap-x-4'>
                    <Account />
                    <TimeandLocation />
                  </div>
                )}
                {tab === 'Security information' && (
                  <div className='width flex flex-col gap-y-6'>
                    <div className='w-full flex justify-center gap-x-4'>
                      <Security />
                    </div>
                  </div>
                )}
                {tab === 'Withdrawal information' && (
                  <div className='width grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2'>
                    <BankSetUp />
                    <UpdatePin />
                  </div>
                )}
              </>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default page

// {
//   /* <div className=' flex md:justify-end w-full  md:w-1/2 '>
//             <div className='flex gap-x-6 border w-full md:w-[80%] py-4 px-4'>
//               <div className='w-16 h-12'>
//                 <img
//                   src='/Images/Rectangle 86.png'
//                   alt=''
//                   className='w-full h-full'
//                 />
//               </div>
//                <div className='flex flex-col gap-y-3'>
//                 <h6>Profile picture</h6>
//                 <div className='flex gap-x-4 '>
//                   <CustomButton
//                     title='Change picture'
//                     containerStyles='bg-[#218B07] text-white flex justify-center items-center rounded-[5px] px-2 py-3'
//                   />
//                   <CustomButton
//                     title='remove'
//                     containerStyles='bg-[#E6E6E6] text-white flex justify-center items-center rounded-[5px] px-2 py-3'
//                   />
//                 </div>
//               </div> 
//             </div>
//           </div>*/
// }
