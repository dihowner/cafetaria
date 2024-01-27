import React, { useRef, useState } from 'react'
import Switch from '@mui/material/Switch'
import { TbCurrencyNaira } from "react-icons/tb";
import Modal from '@/components/Modal';

import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { LiaTimesSolid } from 'react-icons/lia'
import EditInput from '@/components/EditInput';
const SubMeal = ({ submeal, categoryDetails, selectedCategoryForDelete, setSelectedCategoryForDelete }) => {
    console.log(submeal)
    const noItemMessage = submeal && submeal?.length === 0 ? 'No item Created' : null
    const [isOpenModal, setIsOpenModal] = useState(null)
    const openModal = (index) => {
        setIsOpenModal(index)
    }
    console.log(categoryDetails)
    const { categories } = useSelector((state) => state.rootReducers)
    const category = categories?.category
    const { editSubMeal, editSubmealLoading,deletesubMeal,deleteSubmealLoading } = mealsfetch()
    const status = [
        { value: true, status: 'Active' },
        { value: false, status: 'Not Active' },
    ]
    const nameRef = useRef(null)
    const isAvailableRef = useRef(null)
    const priceRef = useRef(null)

    const editSubmubmeal = async (e, submealId, mealId) => {
        e.preventDefault()

        const data = {
            unit_price: priceRef?.current?.value,
            name: nameRef?.current?.value,
            category: categoryDetails?.id,
            is_available: isAvailableRef?.current?.value,
        }
        await editSubMeal(data, submealId, mealId, setIsOpenModal)
    }
    return (
        <>
            {noItemMessage ? (
                <div className='text-center text-[#218B07] text-xl w-full capitalize'>
                    {noItemMessage}
                </div>) : (

                <div className='w-full grid grid-cols-1 gap-y-4 md:grid-cols-3 gap-x-4'>
                    <>

                        {submeal && submeal.map((item, index) => (
                            <div className="bg-white shadow-lg rounded-[8px] py-6 px-4 capitalize flex flex-col gap-y-8 relative">
                                {selectedCategoryForDelete &&
                                    <span className='bg-[#FF9C06] p-2 h-6 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                                        onClick={() => deletesubMeal(item?._id, item?.meal)}>
                                        <LiaTimesSolid className='text-sm' />
                                    </span>
                                }
                                {/*  */}
                                <div className="flex justify-between items-center text-[#6A6A6A] text-lg font-medium">
                                    <p>{item?.name}</p>
                                    <p className='flex gap-x-1 items-center'><span><TbCurrencyNaira /></span>{item?.unitPrice}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className='text-[#218B07] text-lg font-medium cursor-pointer' onClick={() => openModal(index)}>Edit</p>

                                    <Switch
                                        checked={item?.isAvailable}
                                        // onChange={() => changeavai(item)}
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
                                </div>
                                <Modal isOpen={isOpenModal === index} height='400px' close={() => setIsOpenModal(false)}>
                                    <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                                        <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                                            onClick={() => setIsOpenModal(false)}>
                                            <LiaTimesSolid className='text-sm' />
                                        </span>
                                        <form
                                            onSubmit={(e) => editSubmubmeal(e, item?._id, item?.meal)}
                                            className="flex flex-col justify-center items-center w-full gap-y-6">
                                            <h1 className='text-lg text-[#218B07] font-[700] text-center'>Edit {item?.name} sub Meal</h1>
                                            <div className="grid grid-cols-2 gap-4">
                                                <EditInput title={'Item Name'}
                                                    reff={nameRef}
                                                    defaultValue={item?.name}
                                                    type={'text'}
                                                />
                                                <EditInput title={'Price'}
                                                    reff={priceRef}
                                                    defaultValue={item?.unitPrice}
                                                    type={'text'} />
                                                <div className='flex flex-col w-full'>
                                                    <label htmlFor='' className='text-sm'>Availability</label>
                                                    <select
                                                        defaultValue={item?.isAvailable}
                                                        ref={isAvailableRef}
                                                        className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] outline-none bg-transparent'
                                                    >
                                                        {status.map((item, index) => (
                                                            <option key={index} value={item.value} className='capitalize'>
                                                                {item.status}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className='flex flex-col w-full'>
                                                    <label htmlFor=''>Category</label>

                                                    <select
                                                        defaultValue={categoryDetails?._id}
                                                        disabled
                                                        className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] outline-none bg-transparent'
                                                    >

                                                        <option key={index} value={categoryDetails?._id} className='capitalize'>
                                                            {categoryDetails?.name}
                                                        </option>

                                                    </select>
                                                </div>
                                                {/* <div className="flex flex-col w-full addsub">
                                                <label htmlFor=''>Category</label>

                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={options}
                                                    sx={{ width: "100%" }}
                                                    onChange={handleCategoryChange}
                                                    renderInput={(params) => <TextField {...params} label="select category" />}
                                                />

                                            </div> */}
                                            </div>
                                            <div className=' flex justify-center w-full'>
                                                <Button
                                                    sx={{
                                                        backgroundColor: '#218B07',
                                                        color: '#ffffff',
                                                        '&:hover': {
                                                            backgroundColor: '#218B07',
                                                        },
                                                    }}
                                                    type='submit'
                                                >
                                                    {editSubmealLoading ? 'loading...' : 'Edit Sub-Meal'}
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                   
                                </Modal>
                            </div>
                        ))}
                    </>
                </div>
            )}
        </>
    )
}

export default SubMeal