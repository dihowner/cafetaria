'use client'
import CustomButton from '@/components/CustomButton'
import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { MdSwipeDownAlt } from 'react-icons/md'
import { ItemsTableData } from '@/components/Utilis/Dummy'
import Switch from '@mui/material/Switch'
import AdditemModal from '@/components/MerchantDashboard/item/AdditemModal'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import ResturantItems from '@/components/MerchantDashboard/item/ResturantItems'
const page = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }
  const [value, setValue] = useState('Restaurants')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='width flex flex-col gap-y-4 border'>
        <div className='flex justify-between  w-full md:items-center flex-col md:flex-row gap-y-6 p-4 '>
          <div className='flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg'>
            <span>
              <MdSwipeDownAlt />
            </span>
            <span>Items</span>
          </div>
          <CustomButton
            title='Add'
            containerStyles='text-[#218B07] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 border-[#218B07] border'
            Icon={<IoIosAdd />}
            handleClick={() => {
              openModal()
            }}
          />
        </div>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            sx={{
              '.css-1aquho2-MuiTabs-indicator': {
                backgroundColor: '#218B07', // Change this to your desired color
                color: '#218B07',
              },
            }}
          >
            <Tab label='Restaurants' value='Restaurants' />
            <Tab label='Groceries' value='Groceries' />
          </TabList>
          <TabPanel value='Restaurants'>
            <div className='flex justify-between items-center bg-[#218B07] p-4'>
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
            <ResturantItems ItemsTableData={ItemsTableData} />
          </TabPanel>
          <TabPanel value='Groceries'>
            {' '}
            <div className='flex justify-between items-center bg-[#218B07] p-4'>
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
            </div>
          </TabPanel>
        </TabContext>
      </div>
      <AdditemModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  )
}

export default page
