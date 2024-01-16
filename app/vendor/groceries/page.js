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
import { useSelector, useDispatch } from 'react-redux'
const page = () => {
  const router = useRouter()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }
  const { Details } = useSelector((state) => state.rootReducers)
  const vendordetails = Details?.Details?.mart
  console.log(vendordetails?.mart)
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='width flex flex-col gap-y-4 border pb-6'>
        <div className='flex justify-between  w-full md:items-center flex-col md:flex-row gap-y-6 p-4 '>
          <div className='flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg'>
            <span>
              <MdSwipeDownAlt className='text-sm' />
            </span>
            <span>Groceries Items</span>
          </div>
          <CustomButton
            title='Add'
            containerStyles='text-[#218B07] flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-2 border-[#218B07] border text-sm'
            Icon={<IoIosAdd />}
            handleClick={() => {
              router.push('groceries/add-item')
            }}
          />
        </div>
        {/* {vendordetails && vendordetails?.mart === undefined && null ? (
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
          <> */}
            <div className='border-2 '>
              gggggg
              <div className=''>
                <img src={vendordetails?.image} alt='' srcset='' />
              </div>
              <div className=''>
                <h3>{vendordetails?.name}</h3>
                <p>{vendordetails?.address}</p>
              </div>
            </div>
          {/* </>
        )} */}

        {/* <div className='flex justify-between items-center bg-[#218B07] p-4'>
          <div className='flex gap-x-4'>
            <CustomButton
              title='All Items 48'
              containerStyles='text-[#218B07] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4  bg-[white]'
            />
            <CustomButton
              title='Active 31'
              containerStyles='text-[white] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4 border-[white] border'
            />
            <CustomButton
              title='Not Active 17'
              containerStyles='text-[white] flex justify-center items-center py-2 px-4 rounded-[5px] gap-x-4 border-[white] border'
            />
          </div>
        </div>
        <div className='overflow-x-auto  w-[100%]'>
          <div className='inline-block min-w-full'>
            <div className='overflow-hidden'>
              <table className='min-w-full'>
                <thead className='border-b'>
                  <tr className='capitalize'>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      sn
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Preview
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Name
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Total order
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Total Review
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Status
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {ItemsTableData.map((item, index) => (
                    <tr className='border-b capitalize p-8' key={index}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.id}
                      </td>
                      <td>
                        <div className=' border rounded-lg m-2 py-1 w-[40%] flex justify-center items-center'>
                          <img
                            className='w-12 h-12 rounded-full object-cover'
                            src={item.image}
                            alt='image'
                          />
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.TotalOrder}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.TotalReview}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                        <Switch
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />
                      </td>
                      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        <ul className='flex items-center justify-start'>
                          <li className='py-1 px-2.5'>
                            <FaEdit />
                          </li>
                          <li className='py-1 px-2.5'>
                            <FaTrash />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
      <StoreCreation
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </div>
  )
}

export default page
