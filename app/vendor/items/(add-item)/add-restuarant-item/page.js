'use client'

import React, { useState } from 'react'
import InputsCustom from '@/components/InputsCustom'
import Upload from '@/components/Upload'
import CustomButton from '@/components/CustomButton'
import { useCreateMealMutation } from '@/redux/Vendor/createMealApiSlice'
import { useDispatch } from 'react-redux'
import { createMeal } from '@/redux/Vendor/Slices/createMealSlice'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
const page = () => {
  const status = [
    { value: true, status: 'True' },
    { value: false, status: 'False' },
  ]

  const type = ['Meal', 'Groceries']
  const { auth } = useSelector((state) => state.rootReducers)
  const [description, setDescription] = useState()
  const [mealImage, setMealImage] = useState()
  const [name, setName] = useState()
  const [meal_type, setMeal_type] = useState(type[0])
  const [is_available, setIs_available] = useState(true)
  const [unit_price, setUnit_price] = useState()
  const [CreateMeal, { isLoading: creatMealLoading }] = useCreateMealMutation()
  // const handleImageUpload = (file) => {
  //   const reader = new FileReader()

  //   reader.onload = (e) => {
  //     // Set the selected image data in the form data
  //     setMealImage(e.target.result)
  //   }

  //   reader.readAsDataURL(file)
  // }

  const dispatch = useDispatch()
  const formData = {
    description: description,
    mealImage: mealImage,
    name: name,
    meal_type: meal_type,
    is_available: is_available,
    unit_price: unit_price,
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await CreateMeal({
        formData,
        token: auth.token,
      }).unwrap()
      dispatch(createMeal(response))
      toast.success()
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
    console.log('Form data to be sent:', formData)
  }
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <form
        action=''
        onSubmit={handlesubmit}
        className='width flex flex-col gap-y-8 justify-center items-center '
      >
        <div className=' w-full grid grid-cols-2 gap-x-4'>
          <div className=''>
            <Upload
              // onImageUpload={handleImageUpload}
              mealImage={setMealImage}
            />
          </div>
          <div className=''>
            <InputsCustom
              title={'Meal Name'}
              type={'text'}
              value={name}
              onchange={setName}
            />
            <InputsCustom
              title={'Description'}
              type={'text'}
              value={description}
              onchange={setDescription}
            />
            {/* <InputsCustom title={'Meal Pack'} type={'text'} /> */}
            <div className='flex flex-col w-full'>
              <label htmlFor=''>Item Type</label>
              <select
                name=''
                id=''
                value={meal_type}
                onChange={(e) => setMeal_type(e.target.value)}
                className='flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] outline-none'
              >
                {type.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor=''>Status</label>
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
            <InputsCustom
              title={'Price'}
              type={'number'}
              value={unit_price}
              onchange={setUnit_price}
            />
          </div>
        </div>
        <div className=' flex justify-end w-full'>
          <CustomButton
            title={'Create Meal'}
            containerStyles='bg-[#218B07] text-white flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-[200px]'
            type='submit'
          />
        </div>
      </form>
    </div>
  )
}

export default page
