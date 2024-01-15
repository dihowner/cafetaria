import React from 'react'
import { OrdersTableData } from '@/components/Utilis/Dummy'
import { BiSortAlt2 } from 'react-icons/bi'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
// import CustomButton from '@/components/CustomButton'
const page = () => {
  const maxLength = 15
  const truncate = (str) => {
    if (typeof str === 'string' && str.length > maxLength) {
      return str.slice(0, maxLength) + '.....'
    }
    return str
  }
  return (
    <div className='flex justify-center flex-col items-center w-full '>
      <div className='width flex flex-col gap-y-4 border'>
        <div className='flex justify-between md:items-center flex-col md:flex-row gap-y-6 w-full p-2  '>
          <div className='flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg'>
            <span>
              <FaCartShopping />
            </span>
            <span>Orders</span>
          </div>
          <div className='flex gap-x-2 text-sm items-center text-[#0000007D] border p-2'>
            <span>
              <BiSortAlt2 />
            </span>
            <span>Filter order</span>
          </div>
        </div>
        {/* <CustomButton */}
        <div className=' w-[100%] overflow-x-auto bg-[white]'>
          <div className='inline-block min-w-full'>
            <div className='overflow-hidden'>
              <table className='min-w-full'>
                <thead className='border-b'>
                  <tr className='capitalize bg-[#218B07] text-white'>
                    <td
                      scope='col'
                      className='text-sm font-bold text-white px-1 py-1 text-left '
                    >
                      #
                    </td>
                    <td
                      scope='col'
                      className='text-sm  text-white px-1 py-1 font-bold whitespace-nowrap text-left'
                    >
                      Order ID
                    </td>
                    <td
                      scope='col'
                      className='text-sm  text-white px-1 py-1 font-bold text-left '
                    >
                      Order
                    </td>

                    <td
                      scope='col'
                      className='text-sm  text-white px-1 py-1 font-bold text-left'
                    >
                      Address
                    </td>
                    <td
                      scope='col'
                      className='text-sm  text-white px-1 py-1 font-bold text-left'
                    >
                      Phone
                    </td>
                    <td
                      scope='col'
                      className='text-sm  text-white px-1 py-1 font-bold text-left'
                    >
                      Amount
                    </td>
                    <td
                      scope='col'
                      className='text-sm  text-white px-1 py-1 font-bold text-left'
                    >
                      Date
                    </td>
                    <td
                      scope='col'
                      className='text-sm  text-white px-1 py-1 font-bold text-left'
                    >
                      Status
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {OrdersTableData.map((item, index) => (
                    <tr className='border-b capitalize my-2' key={index}>
                      <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.id}
                      </td>
                      <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.order_id}
                      </td>
                      <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900'>
                        <div className='flex gap-x-2'>
                          <img
                            className='w-8 h-8 rounded-[10px] object-cover'
                            src={item.image}
                            alt='image'
                          />
                          <div className=''>
                            <p className='text-sm font-semibold'>
                              {item.order}
                            </p>
                            <span className='text-[#ABABAB] text-sm'>
                              {item.type}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {truncate(item.address)}
                      </td>
                      <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.phone}
                      </td>
                      <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.amount}
                      </td>
                      <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.date}
                      </td>
                      <td className='px-1 py-1 whitespace-nowrap text-sm font-medium '>
                        <div
                          className={`w-[100px] ${
                            item.status === 'Successful'
                              ? 'text-[white] rounded-lg flex justify-center items-center p-1 bg-[#218B07] text-sm'
                              : 'text-[white] rounded-lg flex justify-center items-center p-1 bg-[#ED1111] text-sm'
                          }`}
                        >
                          {item.status}
                        </div>
                        <Link
                          href={`/vendor/orders/${item.id}`}
                          className='text-[#218B07]  gap-x-1 mt-4 font-semibold flex items-center'
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
