import CustomButton from '@/components/CustomButton'
import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { ItemsTableData } from '@/components/Utilis/Dummy'
import Switch from '@mui/material/Switch';
const page = () => {
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='width flex flex-col gap-y-4'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-4'>
            <CustomButton
              title='All Items 48'
              containerStyles='text-[white] flex justify-center items-center py-2 px-4 rounded-[10px] gap-x-4  bg-[#218B07]'
            />
            <CustomButton
              title='Active 31'
              containerStyles='text-[#218B07] flex justify-center items-center py-2 px-4 rounded-[10px] gap-x-4 border-[#218B07] border'
            />
            <CustomButton
              title='Not Active 17'
              containerStyles='text-[#218B07] flex justify-center items-center py-2 px-4 rounded-[10px] gap-x-4 border-[#218B07] border'
            />
          </div>
          <CustomButton
            title='Add'
            containerStyles='text-[#218B07] flex justify-center items-center py-2 px-4 rounded-[10px] gap-x-2  border-[#218B07] border'
            Icon={<IoIosAdd />}
          />
        </div>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8 bg-[transparent] rounded-[20px]'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
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
      </div>
    </div>
  )
}

export default page
