import React from 'react'
import { DashboardTableData } from '@/components/Utilis/Dummy'
import CustomButton from '@/components/CustomButton'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaCartShopping } from 'react-icons/fa6'
// Link
const Table = () => {
    const maxLength = 25
    const truncate = (str) => {
        if (typeof str === 'string' && str.length > maxLength) {
            return str.slice(0, maxLength) + '.....'
        }
        return str
    }
    return (
        <div className='width flex flex-col gap-y-4'>
            <div className="flex gap-x-4 items-center">
                <h1 className='text-[#000000B5] font-bold text-base md:text-2xl'>Recents Orders</h1>
                <CustomButton
                    title='View All Orders'
                    containerStyles='text-[white] flex justify-center items-center py-2 px-4 md:px-8 rounded-[8px] gap-x-4  bg-[#218B07]'

                />
            </div>
            {/* sm:-mx-6 lg:-mx-8 */}
            <div className=' w-[100%] overflow-x-auto bg-[white]  border'>
                <div className="flex justify-between items-center w-full min-w-full px-6 py-4">
                    <div className="flex gap-x-2 items-center text-lg font-semibold">
                        <span><FaCartShopping /></span>
                        <span>Order</span>
                    </div>
                    <span>....</span>
                </div>
                <div className=' inline-block min-w-full '>
                    <div className='overflow-hidden'>
                        <table className='min-w-full'>
                            <thead className='border-b'>
                                <tr className='capitalize bg-[#218B07] text-white'>
                                    <td scope='col'
                                        className='text-base font-bold text-white px-6 py-4 text-left'>#</td>
                                    <td scope='col'
                                        className='text-base font-bold whitespace-nowrap text-white px-6 py-4 text-left'>Order ID</td>
                                    <td scope='col'
                                        className='text-base font-bold text-white px-6 py-4 text-left'>Order</td>

                                    <td scope='col'
                                        className='text-base font-bold text-white px-6 py-4 text-left'>Address</td>
                                    <td scope='col'
                                        className='text-base font-bold text-white px-6 py-4 text-left'>Phone</td>
                                    <td scope='col'
                                        className='text-base font-bold text-white px-6 py-4 text-left'>Amount</td>
                                    <td scope='col'
                                        className='text-base font-bold text-whitepx-6 py-4 text-left'>Date</td>
                                    <td scope='col'
                                        className='text-base font-bold text-white px-6 py-4 text-left'>Status</td>
                                </tr>
                            </thead>
                            <tbody>

                                {DashboardTableData.map((item, index) => (
                                    <tr className='border-b capitalize my-8' key={index}>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                            {item.id}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                            {item.order_id}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                            <div className="flex gap-x-4">
                                                <img
                                                    className='w-12 h-12 rounded-[10px] object-cover'
                                                    src={item.image}
                                                    alt='image'
                                                />
                                                <div className="">
                                                    <p className='text-base font-semibold'>{item.order}</p>
                                                    <span className='text-[#ABABAB] text-base'>{item.type}</span>
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
                                            <div className={`w-[100px] ${item.status === 'Successful' ? 'text-[white] rounded-lg flex justify-center items-center p-2 bg-[#218B07]' : 'text-[white] rounded-lg flex justify-center items-center p-2 bg-[#ED1111]'}`}>
                                                {item.status}
                                            </div>
                                            <Link href={`/vendor/orders/${item.id}`} className='text-[#218B07]  gap-x-1 mt-6 font-semibold flex items-center'>
                                                <p> view details </p><span><AiOutlineArrowRight /></span>
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