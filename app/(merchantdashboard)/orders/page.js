import React from 'react'
import { OrdersTableData } from '@/components/Utilis/Dummy'
import { BiSortAlt2 } from 'react-icons/bi'
const page = () => {
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='width'>
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl font-medium'>Item order</h3>
          <div className='flex gap-x-2 items-center text-[#0000007D] border p-2'>
            <span>
              <BiSortAlt2 />
            </span>
            <span>Filter order</span>
          </div>
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
                      Image
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Customer
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Address
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Item
                    </td>
                    <td
                      scope='col'
                      className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                    >
                      Status
                    </td>
                  </tr>
                </thead>

                <tbody>
                  {OrdersTableData.map((item, index) => (
                    <tr
                      className='border bg-white capitalize rounded-2xl'
                      key={index}
                    >
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.id}
                      </td>
                      <td>
                        <img
                          className='w-12 h-12 rounded-full object-cover'
                          src={item.image}
                          alt='image'
                        />
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.address}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {item.item}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                        <div className='text-[#FF9C06] rounded-lg flex justify-center items-center p-2 bg-[#FF9C062B] '>
                          {item.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='w-[20%] capitalize'>
              <h1>order details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
