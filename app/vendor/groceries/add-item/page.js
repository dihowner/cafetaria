'use client'

import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { redirect, useRouter } from 'next/navigation'
import { LiaTimesSolid } from 'react-icons/lia'
import Upload from '@/components/Upload'
import InputsCustom from '@/components/InputsCustom'
import { useSelector, useDispatch } from 'react-redux'
import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch'
// import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch'
const page = () => {
  const router = useRouter()
  const status = [
    { value: true, status: 'Active' },
    { value: false, status: 'Not Active' },
  ]
  const { getcategory, getCategoryLoading, createGrocery, loading } =
    groceriesFetch()

  useEffect(() => {
    getcategory()
  }, [])
  const { GroceriesCategory } = useSelector((state) => state.rootReducers)
  const categories = GroceriesCategory?.category
  const [mealImage, setMealImage] = useState()
  const [itemName, setItemName] = useState()
  const [is_available, setIs_available] = useState()
  const [unit_price, setUnit_price] = useState()
  const [categoryId, setCategoryId] = useState()
  const handlesubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('groceryImage', mealImage) // Assuming mealImage is a File object
    formData.append('name', itemName)
    formData.append('is_available', is_available)
    formData.append('grocerycategory', categoryId)
    formData.append('unit_price', unit_price)

    await createGrocery(formData)
    setCategoryId('')
    setUnit_price('')
    setMealImage(null)
    setItemName('')
    router.back()

  }
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='width flex flex-col gap-y-8 justify-center items-center '>
        <div className='flex items-center justify-between gap-x-4 w-[100%]'>
          <div className='flex items-center text-sm gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg'>
            <span>Add Groceries Item</span>
          </div>
          <span
            className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md text-white cursor-pointer'
            onClick={() => router.back()}
          >
            <LiaTimesSolid className='text-sm' />
          </span>
        </div>

        <div className='flex justify-center flex-col items-center w-full'>
          <form
            action=''
            onSubmit={handlesubmit}
            className='w-full flex flex-col gap-y-4 justify-center items-center '
          >
            <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3'>
              <Upload mealImage={setMealImage} />
              <div className='w-full'>
                <div className='  w-full flex flex-col md:flex-row justify-between gap-x-2 gap-y-2 items-center'>
                  <InputsCustom
                    title={'Item Name'}
                    type={'text'}
                    value={itemName}
                    onchange={setItemName}
                  />
                  <InputsCustom
                    title={'Price'}
                    type={'number'}
                    value={unit_price}
                    onchange={setUnit_price}
                  />
                </div>

                <div className='flex flex-col w-full'>
                  <label htmlFor='' className='text-sm'>
                    Availability
                  </label>
                  <select
                    value={is_available}
                    onChange={(e) => setIs_available(e.target.value)}
                    className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] text-sm outline-none'
                  >
                    <option value='' disabled selected>
                      Select Availability
                    </option>
                    {status.map((item, index) => (
                      <option
                        key={index}
                        value={item.value}
                        className='capitalize text-sm'
                      >
                        {item.status}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor='' className='text-sm'>
                    Category
                  </label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] text-sm outline-none capitalize'
                  >
                    <option value='' disabled selected>
                      Select a Category
                    </option>
                    {categories &&
                      categories.map((item, index) => (
                        <option
                          key={index}
                          value={item._id}
                          className='capitalize text-sm'
                        >
                          {item?.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className='flex justify-end items-center w-[100%] p-4'>
              <Button
                sx={{
                  backgroundColor: '#218B07',
                  color: '#ffffff',
                  textTransform: 'capitalize',

                  '&:hover': {
                    backgroundColor: '#218B07',
                  },
                }}
                type='submit'
              >
                {loading ? 'Loading' : 'Add Item'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
