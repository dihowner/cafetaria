import { PaymentHistoryTableData } from '@/components/Utilis/Dummy'
import React from 'react'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'

const page = () => {
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='flex justify-between width md:items-center flex-col md:flex-row gap-y-6 p-4'>
        <div className='flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg'>
          <span>
            <BsFillCreditCard2BackFill />
          </span>
          <span>Payment History</span>
        </div>
      </div>
      <div className=' width overflow-x-auto bg-[white] border'>
        <div className='inline-block min-w-full'>
          <div className='overflow-hidden'>
            <table className='min-w-full table-layout-fixed'>
              <thead className='border-b sticky'>
                <tr className='capitalize bg-[#FF9C06] text-white'>
                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left sticky left-0 top-0 z-10'
                  >
                    image
                  </td>
                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left sticky left-0 top-0 z-10'
                  >
                    item
                  </td>
                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left'
                  >
                    Date
                  </td>
                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left'
                  >
                    Payment Method
                  </td>
                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left'
                  >
                    Status
                  </td>
                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left'
                  >
                    Amount
                  </td>
                </tr>
              </thead>
              <tbody>
                {PaymentHistoryTableData.map((item, index) => (
                  <tr className='border-b capitalize my-8' key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                      <img
                        className='w-12 h-12 rounded-[10px] object-cover'
                        src={item.image}
                        alt='image'
                      />
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 top-0 bg-white z-10 '>
                      <div className='flex gap-x-4'>
                    
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
                      {item.date}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                      {item.paymentType}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                      <div
                        className={`w-[100px] ${item.status === 'Successful'
                            ? 'text-[white] rounded-lg flex justify-center items-center p-2 bg-[#218B07]'
                            : 'text-[white] rounded-lg flex justify-center items-center p-2 bg-[#ED1111]'
                          }`}
                      >
                        {item.status}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page