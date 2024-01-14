import Modal from '@/components/Modal'
import React, { useState, useEffect } from 'react'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { LiaTimesSolid } from 'react-icons/lia'
import InputsCustom from '@/components/InputsCustom'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const AddSubMeal = ({ isOpenModal, setIsOpenModal, itemID }) => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [categoryId, setCategoryId] = useState()
    // const [name, setName] = useState()
    const status = [
        { value: true, status: 'Active' },
        { value: false, status: 'Not Active' },
    ]
    const [is_available, setIs_available] = useState(true)
    const { createSubMeal, createSubMealLoading, error } = mealsfetch()

    const { categories } = useSelector((state) => state.rootReducers)
    const category = categories?.category
    const options = category?.map((item) => ({ label: item?.name, value: item?._id })) || [];
    const handleCategoryChange = (event, value) => {
        if (value) {
            setCategoryId(value.value);
        } else {
            setCategoryId(null);
        }
    };
    console.log(categoryId)
    const data = {
        unit_price: price,
        name: name,
        category: categoryId,
        is_available: is_available
    }
    const submealcreate = async (e) => {
        e.preventDefault()
        await createSubMeal(data, categoryId, itemID?._id)
    }
    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)} >
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid/>  
                    </span>
                </div>
                <form onSubmit={submealcreate } className="flex flex-col justify-center items-center w-full gap-y-6">
                    <h1 className='text-3xl text-[#218B07] font-[700] text-center'>Add Submeals to {itemID?.name}</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <InputsCustom title={'Item Name'}
                            type={'text'}
                            value={name}
                            onchange={setName} />
                        <InputsCustom title={'Price'}
                            type={'number'}
                            value={price}
                            onchange={setPrice} />
                        <div className='flex flex-col w-full'>
                            <label htmlFor=''>Availability</label>
                            <select
                                value={is_available}
                                onChange={(e) => setIs_available(e.target.value)}
                                className='flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] outline-none'
                            >
                                {status.map((item, index) => (
                                    <option key={index} value={item.value} className='capitalize'>
                                        {item.status}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full addsub">
                            <label htmlFor=''>Category</label>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={options}
                                sx={{ width: "100%" }}
                                onChange={handleCategoryChange}
                                renderInput={(params) => <TextField {...params} label="select category" />}
                            />

                        </div>
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
                            {createSubMealLoading ? 'Loading' : 'Add Sub-Meal'}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddSubMeal