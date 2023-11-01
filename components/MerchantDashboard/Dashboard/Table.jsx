import React from 'react'
import { DashboardTableData } from '@/components/Utilis/Dummy'
import CustomButton from '@/components/CustomButton'
const Table = () => {
    return (
        <div className='width flex flex-col gap-y-4'>
          <div className="flex gap-x-4 items-center">
                <h1 className='text-[#000000B5] font-bold text-2xl'>Pending Orders</h1>
                <CustomButton
                    title='View All Orders'
                    containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[10px] gap-x-4  bg-[#218B07]'

                />
          </div>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8 bg-[white] rounded-[20px]'>
                <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='overflow-hidden'>
                        <table className='min-w-full'>
                            <thead className='border-b'>
                                <tr className='capitalize'>
                                    <td scope='col'
                                        className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'>sn</td>
                                    <td scope='col'
                                        className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'>Image</td>
                                    <td scope='col'
                                        className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'>Customer</td>
                                    <td scope='col'
                                        className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'>Address</td>
                                    <td scope='col'
                                        className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'>Item</td>
                                    <td scope='col'
                                        className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'>Status</td>
                                </tr>
                            </thead>
                            <tbody>

                                {DashboardTableData.map((item, index) => (
                                    <tr className='border-b capitalize my-8' key={index}>
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
                                            <div className="text-[#FF9C06] rounded-lg flex justify-center items-center p-2 bg-[#FF9C062B] ">
                                                {item.status}

                                            </div>
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