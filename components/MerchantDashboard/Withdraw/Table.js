import React from 'react'
import { withdrawData } from '@/components/Utilis/Dummy'
import Link from 'next/link'
// Link
const Table = () => {
  return (
    <div className='width flex flex-col gap-y-4'>
      <div className=' w-[100%] overflow-x-auto bg-[white] border '>
        <div className='flex gap-x-2 items-center text-lg font-semibold p-4'>
          <span className='text-[#218B07] text-2xl'>Recent withdraw</span>
        </div>
        <div className=' inline-block min-w-full '>
          <div className='overflow-hidden'>
            <table className='min-w-full'>
              <thead className='border-b'>
                <tr className='capitalize bg-[#218B07] text-white'>
                  <td
                    scope='col'
                    className='text-base font-bold whitespace-nowrap text-white px-6 py-4 text-left'
                  >
                    Bank name
                  </td>
                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left'
                  >
                    Account holder name
                  </td>

                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left'
                  >
                    Amount
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
                    Date and time
                  </td>
                  <td
                    scope='col'
                    className='text-base font-bold text-white px-6 py-4 text-left'
                  ></td>
                </tr>
              </thead>
              <tbody>
                {withdrawData.map((item, index) => (
                  <tr className='border-b capitalize my-8' key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[#9D9D9D]'>
                      {item.bankname}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[#9D9D9D]'>
                      {item.Accountholdername}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[#9D9D9D]'>
                      {item.amount}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-white'>
                      <div className='bg-[#218B07] rounded-full p-2 flex justify-center items-center'>
                        {item.status}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                      {item.DateTime}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                      <Link href='' className='text-[#218B07]'>
                        View Withdrawal details
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
  )
}

export default Table
