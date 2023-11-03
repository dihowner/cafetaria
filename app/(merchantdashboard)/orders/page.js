import React from 'react'
import { OrdersTableData } from '@/components/Utilis/Dummy'
import { BiSortAlt2 } from 'react-icons/bi'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
// import CustomButton from '@/components/CustomButton'
const page = () => {
     const maxLength = 25
     const truncate = (str) => {
       if (typeof str === 'string' && str.length > maxLength) {
         return str.slice(0, maxLength) + '.....'
       }
       return str
     }
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='width flex flex-col gap-y-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl font-medium'>Item order</h3>
          <div className='flex gap-x-2 items-center text-[#0000007D] border p-2'>
            <span>
              <BiSortAlt2 />
            </span>
            <span>Filter order</span>
          </div>
        </div>
{/* <CustomButton */}
        <div className=' w-[100%] overflow-x-auto bg-[white] rounded-[20px]'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full'>
                <thead className='border-b'>
                  <tr className='capitalize'>
                    <td
                      scope='col'
                      className='text-base font-bold text-[#000000] px-6 py-4 text-left'
                    >
                      #
                    </td>
                    <td
                      scope='col'
                      className='text-base font-bold whitespace-nowrap text-[#000000] px-6 py-4 text-left'
                    >
                      Order ID
                    </td>
                    <td
                      scope='col'
                      className='text-base font-bold text-[#000000] px-6 py-4 text-left'
                    >
                      Order
                    </td>

                    <td
                      scope='col'
                      className='text-base font-bold text-[#000000] px-6 py-4 text-left'
                    >
                      Address
                    </td>
                    <td
                      scope='col'
                      className='text-base font-bold text-[#000000] px-6 py-4 text-left'
                    >
                      Phone
                    </td>
                    <td
                      scope='col'
                      className='text-base font-bold text-[#000000] px-6 py-4 text-left'
                    >
                      Amount
                    </td>
                    <td
                      scope='col'
                      className='text-base font-bold text-[#000000] px-6 py-4 text-left'
                    >
                      Date
                    </td>
                    <td
                      scope='col'
                      className='text-base font-bold text-[#000000] px-6 py-4 text-left'
                    >
                      Status
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {OrdersTableData.map((item, index) => (
                    <tr className='border-b capitalize my-8' key={index}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.id}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.order_id}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        <div className='flex gap-x-4'>
                          <img
                            className='w-12 h-12 rounded-[10px] object-cover'
                            src={item.image}
                            alt='image'
                          />
                          <div className=''>
                            <p className='text-base font-semibold'>
                              {item.order}
                            </p>
                            <span className='text-[#ABABAB] text-base'>
                              {item.type}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {truncate(item.address)}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.phone}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.amount}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.date}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                        <div
                          className={`w-[100px] ${
                            item.status === 'Successful'
                              ? 'text-[white] rounded-lg flex justify-center items-center p-2 bg-[#218B07]'
                              : 'text-[white] rounded-lg flex justify-center items-center p-2 bg-[#ED1111]'
                          }`}
                        >
                          {item.status}
                        </div>
                        <Link
                          href=''
                          className='text-[#218B07]  gap-x-1 mt-6 font-semibold flex items-center'
                        >
                          <p> view details </p>
                          <span>
                            <AiOutlineArrowRight />
                          </span>
                        </Link>
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
