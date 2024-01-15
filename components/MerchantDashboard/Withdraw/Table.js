import React from 'react'
import { withdrawData } from '@/components/Utilis/Dummy'
import Link from 'next/link'
// Link
const Table = () => {
  return (
    <div className='width flex flex-col gap-y-4'>
      <div className=' w-[100%] overflow-x-auto bg-[white] border '>
        <div className='flex gap-x-2 items-center text-lg font-semibold p-2'>
          <span className='text-[#218B07] text-lg'>Recent withdraw</span>
        </div>
        <div className=' inline-block min-w-full '>
          <div className='overflow-hidden'>
            <table className='min-w-full'>
              <thead className='border-b'>
                <tr className='capitalize bg-[#218B07] text-white'>
                  <td
                    scope='col'
                    className='text-sm font-bold whitespace-nowrap text-white px-1 py-1 text-center'
                  >
                    Bank name
                  </td>
                  <td
                    scope='col'
                    className='text-sm font-bold text-white px-1 py-1 text-center'
                  >
                    Account holder name
                  </td>

                  <td
                    scope='col'
                    className='text-sm font-bold text-white px-1 py-1 text-center'
                  >
                    Amount
                  </td>

                  <td
                    scope='col'
                    className='text-sm font-bold text-white px-1 py-1 text-center'
                  >
                    Status
                  </td>
                  <td
                    scope='col'
                    className='text-sm font-bold text-white px-1 py-1 text-center'
                  >
                    Date and time
                  </td>
                  <td
                    scope='col'
                    className='text-sm font-bold text-white px-1 py-1 text-center'
                  ></td>
                </tr>
              </thead>
              <tbody>
                {withdrawData.map((item, index) => (
                  <tr className='border-b capitalize my-8' key={index}>
                    <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-center text-[#9D9D9D]'>
                      {item.bankname}
                    </td>
                    <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-center text-[#9D9D9D]'>
                      {item.Accountholdername}
                    </td>
                    <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-center text-[#9D9D9D]'>
                      {item.amount}
                    </td>
                    <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-center text-white'>
                      <div className='bg-[#218B07] rounded-full text-sm p-1 flex justify-center items-center'>
                        {item.status}
                      </div>
                    </td>
                    <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-center text-gray-900'>
                      {item.DateTime}
                    </td>
                    <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-center text-gray-900'>
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
