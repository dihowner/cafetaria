import React from 'react'
import { DashboardTableData } from '@/components/Utilis/Dummy'
import CustomButton from '@/components/CustomButton'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
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
            <div className=' w-[100%] overflow-x-auto bg-[white] rounded-[20px]'>
                <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='overflow-hidden'>
                        <table className='min-w-full'>
                            <thead className='border-b'>
                                <tr className='capitalize'>
                                    <td scope='col'
                                        className='text-base font-bold text-[#000000] px-6 py-4 text-left'>#</td>
                                    <td scope='col'
                                        className='text-base font-bold whitespace-nowrap text-[#000000] px-6 py-4 text-left'>Order ID</td>
                                    <td scope='col'
                                        className='text-base font-bold text-[#000000] px-6 py-4 text-left'>Order</td>

                                    <td scope='col'
                                        className='text-base font-bold text-[#000000] px-6 py-4 text-left'>Address</td>
                                    <td scope='col'
                                        className='text-base font-bold text-[#000000] px-6 py-4 text-left'>Phone</td>
                                    <td scope='col'
                                        className='text-base font-bold text-[#000000] px-6 py-4 text-left'>Amount</td>
                                    <td scope='col'
                                        className='text-base font-bold text-[#000000] px-6 py-4 text-left'>Date</td>
                                    <td scope='col'
                                        className='text-base font-bold text-[#000000] px-6 py-4 text-left'>Status</td>
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
                                                <p> view details </p><span><AiOutlineArrowRight/></span>
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