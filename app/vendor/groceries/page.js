'use client'
import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import CustomButton from '@/components/CustomButton'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { MdSwipeDownAlt } from 'react-icons/md'
import { ItemsTableData } from '@/components/Utilis/Dummy'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import StoreCreation from '@/components/MerchantDashboard/item/StoreCreation'
// Link
import EditStore from '@/components/MerchantDashboard/item/EditStore'
import CategoryStore from '@/components/MerchantDashboard/item/CategoryStore'
import AppLoader from '@/components/AppLoader'
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { useEffect } from 'react'
import { logout } from '@/user/authSlice'
import GroceriesCategoryList from '@/components/MerchantDashboard/item/GroceriesCategoryList'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch'
import GroceriesItem from '@/components/MerchantDashboard/item/GroceriesItem'

const page = () => {
  const [vendordetails, { isLoading }] = useVendordetailsMutation()
  const dispatch = useDispatch()
  const [error, setError] = useState()
  const { auth } = useSelector((state) => state.rootReducers)
  const router = useRouter()
  const { getcategory, getCategoryLoading } = groceriesFetch()

  useEffect(() => {
    getcategory()
  }, [])
  const fetchDetails = async () => {
    try {
      const response = await vendordetails(auth?.token).unwrap()
      dispatch(setDetails(response))
    } catch (err) {
      // console.log(err)
      // toast.error(err?.data?.message + ' ' + 'Please Login Again' || err.error)
      if (err.status === 401) {
        dispatch(logout())
        // toast.error(err?.data?.message + ' ' + 'Please Login Again')
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
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }
  const [isEditStorOpenModal, setIsEditStorOpenModal] = useState(false)
  const openEditStorModal = () => {
    setIsEditStorOpenModal(true)
  }
  const [isCategoryStorOpenModal, setIsCategoryStorOpenModal] = useState(false)
  const openCategoryStorModal = () => {
    setIsCategoryStorOpenModal(true)
  }
  const { Details } = useSelector((state) => state.rootReducers)
  const vendorDetails = Details?.Details
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
              <div className='width flex flex-col gap-y-4 border pb-6'>
                <div className='flex justify-between  w-full md:items-center flex-col md:flex-row gap-y-6 p-4 '>
                  <div className='flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg'>
                    <span>
                      <MdSwipeDownAlt className='text-sm' />
                    </span>
                    <span>Groceries Items</span>
                  </div>
                  {vendorDetails &&
                  vendorDetails?.mart === undefined &&
                  null ? null : (
                    <div className='flex gap-x-2'>
                      {/* <CustomButton
                        title='Create Category'
                        containerStyles='text-[#218B07] flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-2 border-[#218B07] border text-sm'
                        handleClick={() => {
                          openCategoryStorModal()
                        }}
                      /> */}
                      <Link
                        href={'/vendor/groceries/add-item'}
                        className='text-[#218B07] flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-2 border-[#218B07] border text-sm'
                      >
                        {'Add item'}
                      </Link>
                    </div>
                  )}
                </div>
                {vendorDetails && vendorDetails?.mart === undefined && null ? (
                  <div className='flex flex-col justify-center items-center'>
                    <p className='text-xl text-center font-semibold'>
                      You don't have a store please create one
                    </p>
                    <Button
                      sx={{
                        backgroundColor: '#218B07',
                        color: '#ffffff',
                        textTransform: 'capitalize',

                        '&:hover': {
                          backgroundColor: '#218B07',
                        },
                      }}
                      onClick={() => openModal()}
                    >
                      {'create store'}
                    </Button>
                  </div>
                ) : (
                  <div className='flex flex-col gap-y2'>
                    <div className=' flex justify-cente items-center gap-x-3 6 p-4'>
                      <div className='border w-16 h-16'>
                        <img src={vendorDetails?.mart?.image} alt='image' />
                      </div>
                      <div className=''>
                        <h3 className='capitalize text-sm text-[#218B07] font-semibold'>
                          {vendorDetails?.mart?.name}
                        </h3>
                        <p className='capitalize text-sm text-[#218B07]'>
                          {vendorDetails?.mart?.address}
                        </p>
                      </div>
                    </div>
                    <div className='flex justify-start items-center w-[30%] p-4'>
                      <Button
                        sx={{
                          backgroundColor: '#218B07',
                          color: '#ffffff',
                          textTransform: 'capitalize',

                          '&:hover': {
                            backgroundColor: '#218B07',
                          },
                        }}
                        onClick={() => openEditStorModal()}
                      >
                        {'Edit store'}
                      </Button>
                    </div>
                    {/* <GroceriesCategoryList /> */}
                    <GroceriesItem />  
                  </div>
                )}
              </div>
              <StoreCreation
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
              />
              <EditStore
                isOpenModal={isEditStorOpenModal}
                setIsOpenModal={setIsEditStorOpenModal}
              />
              <CategoryStore
                isOpenModal={isCategoryStorOpenModal}
                setIsOpenModal={setIsCategoryStorOpenModal}
              />
            </>
          )}
        </>
      )}
    </div>
  )
}

export default page

// <div className='flex justify-between items-center bg-[#218B07] p-4'>
//         <div className='flex gap-x-4'>
//           <CustomButton
//             title='All Items 48'
//             containerStyles='text-[#218B07] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4  bg-[white]'
//           />
//           <CustomButton
//             title='Active 31'
//             containerStyles='text-[white] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4 border-[white] border'
//           />
//           <CustomButton
//             title='Not Active 17'
//             containerStyles='text-[white] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4 border-[white] border'
//           />
//         </div>
//       </div>
//       <div className='overflow-x-auto  w-[100%]'>
//         <div className='inline-block min-w-full'>
//           <div className='overflow-hidden'>
//             <table className='min-w-full'>
//               <thead className='border-b'>
//                 <tr className='capitalize'>
//                   <td
//                     scope='col'
//                     className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
//                   >
//                     sn
//                   </td>
//                   <td
//                     scope='col'
//                     className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
//                   >
//                     Preview
//                   </td>
//                   <td
//                     scope='col'
//                     className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
//                   >
//                     Name
//                   </td>
//                   <td
//                     scope='col'
//                     className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
//                   >
//                     Total order
//                   </td>
//                   <td
//                     scope='col'
//                     className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
//                   >
//                     Total Review
//                   </td>
//                   <td
//                     scope='col'
//                     className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
//                   >
//                     Status
//                   </td>
//                   <td
//                     scope='col'
//                     className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
//                   >
//                     Action
//                   </td>
//                 </tr>
//               </thead>
//               <tbody>
//                 {ItemsTableData.map((item, index) => (
//                   <tr className='border-b capitalize p-8' key={index}>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
//                       {item.id}
//                     </td>
//                     <td>
//                       <div className=' border rounded-lg m-2 py-1 w-[40%] flex justify-center items-center'>
//                         <img
//                           className='w-12 h-12 rounded-full object-cover'
//                           src={item.image}
//                           alt='image'
//                         />
//                       </div>
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
//                       {item.name}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
//                       {item.TotalOrder}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
//                       {item.TotalReview}
//                     </td>
//                     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
//                       <Switch
//                         // checked={checked}
//                         // onChange={handleChange}
//                         inputProps={{ 'aria-label': 'controlled' }}
//                       />
//                     </td>
//                     <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
//                       <ul className='flex items-center justify-start'>
//                         <li className='py-1 px-2.5'>
//                           <FaEdit />
//                         </li>
//                         <li className='py-1 px-2.5'>
//                           <FaTrash />
//                         </li>
//                       </ul>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
