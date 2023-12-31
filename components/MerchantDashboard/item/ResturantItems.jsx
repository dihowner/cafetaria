import React, { useEffect, useState } from 'react'
import Switch from '@mui/material/Switch'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '@/components/Loader'
import Link from 'next/link'
import DeleteItemModal from './DeleteItemModal'
import AppLoader from '@/components/AppLoader'
const ResturantItems = () => {

    const { meals } = useSelector((state) => state.rootReducers);
    const { getMeals, getMealLoading, error, changeAvailabilty, loading } = mealsfetch()
    useEffect(() => {
        getMeals()
    }, [])
    const allMeals = meals?.meals
    const noMealMessage = allMeals && allMeals.length === 0 ? 'No meal Created' : null
    const [itemId, setItemId] = useState()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => {
        setIsOpenModal(true)
    }
    const changeavai = async (item) => {
        const updatedAvailability = { ...item, isAvailable: !item.isAvailable };
        const mealId = item?._id
        const formData = new FormData();
        formData.append('isAvailable', updatedAvailability)
        await changeAvailabilty(formData, mealId)
    }
    return (
        <>
            {loading ? <AppLoader loading={loading} color={'#5f8357'} /> : null}
            {getMealLoading ? <Loader /> : <>
                {noMealMessage ? (
                    <div className=''>
                        {noMealMessage}
                    </div>
                ) : (<div className='overflow-x-auto w-[100%]'>
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
                                    {error ? (<div className='text-center text-3xl w-full capitalize'>{error}</div>) : (<>
                                        {allMeals && allMeals.map((item, index) => (
                                            <tr className='border-b capitalize p-8' key={index}>
                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                                    {index + 1}
                                                </td>
                                                <td>
                                                    <div className=' border rounded-lg m-2 py-1 w-[40%] flex justify-center items-center'>
                                                        <img
                                                            className='w-12 h-12 rounded-full object-cover'
                                                            src={item?.image}
                                                            alt='image'
                                                        />
                                                    </div>
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                                    {item.name}
                                                </td>

                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                                    {item?.unitPrice}
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                                                    <Switch
                                                        checked={item?.isAvailable}
                                                        onChange={() => changeavai(item)}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        sx={{
                                                            '& .MuiSwitch-switchBase.Mui-checked': {
                                                                color: '#5f8357',
                                                            },
                                                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                                backgroundColor: '#4CAF50',
                                                            },
                                                        }}
                                                    />
                                                </td>
                                                <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                                    <ul className='flex items-center justify-start'>
                                                        <Link href={`items/editItem/edit-restuarant-meal/${item?._id}`} className='py-1 px-2.5'>
                                                            <FaEdit />
                                                        </Link>
                                                        <li className='py-1 px-2.5 cursor-pointer' onClick={() => {
                                                            openModal()
                                                            setItemId(item)
                                                        }}
                                                        >
                                                            {/* {item?._id} */}
                                                            <FaTrash />
                                                        </li>
                                                        <li className='py-1 px-2.5'>
                                                            <FaEye />
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}</>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>)}
            </>
            }
            <DeleteItemModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} itemID={itemId} />
        </>

    )
}

export default ResturantItems