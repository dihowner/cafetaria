import React, { useEffect } from 'react'
import Switch from '@mui/material/Switch'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'

const ResturantItems = ({ ItemsTableData }) => {
    useEffect(() => {

    }, [])
    return (
        <div className='overflow-x-auto w-[100%]'>
            <div className='inline-block min-w-full'>
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
                                    Unit Price
                                </td>
                                <td
                                    scope='col'
                                    className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                                >
                                    Availability
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
                                    {/* <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                        {item.TotalOrder}
                                    </td> */}
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
    )
}

export default ResturantItems