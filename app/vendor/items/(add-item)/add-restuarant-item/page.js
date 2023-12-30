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
import axios from 'axios'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
const page = () => {
  const status = [
    { value: true, status: 'True' },
    { value: false, status: 'False' },
  ]
  const [checked, setChecked] = React.useState(true)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }
  const { auth } = useSelector((state) => state.rootReducers)
  const [description, setDescription] = useState()
  const [mealImage, setMealImage] = useState()
  const [name, setName] = useState()
  // const [meal_category, setMeal_category] = useState()
  const [is_available, setIs_available] = useState(true)
  const [unit_price, setUnit_price] = useState()
  const [packaging, setPackaging] = useState({
    styrofoam: { price: '', status: true },
    plastic_plate: { price: '', status: true },
  })
  const [CreateMeal, { isLoading: creatMealLoading }] = useCreateMealMutation()
  const dispatch = useDispatch()
  const handlePackagingChange = (category, field, value) => {
    setPackaging((prevPackaging) => ({
      ...prevPackaging,
      [category]: {
        ...prevPackaging[category],
        [field]: value,
      },
    }))
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('description', description)
    formData.append('mealImage', mealImage) // A ssuming mealImage is a File object
    formData.append('name', name)
    formData.append('is_available', is_available)
    formData.append('unit_price', unit_price)
    const packagingData = {
      styrofoam: {
        is_required: true, // You may adjust this based on your logic
        price: packaging.styrofoam.price,
      },
      plastic_plate: {
        is_required: true, // You may adjust this based on your logic
        price: packaging.plastic_plate.price,
      },
    }
    formData.append('packaging', JSON.stringify(packagingData))
    console.log('Form data to be sent:', formData)

    await axios
      .post(
        'https://cafeteria-ekep.onrender.com/api/meals/add-meal',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/formData',
            Accept: 'Application/json',
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })

    // try {
    //   const response = await CreateMeal({
    //      formData,
    //     token: auth.token,
    //   }).unwrap()
    //   dispatch(createMeal(response))
    //   toast.success()
    // } catch (err) {
    //   toast.error(err?.data?.message || err.error)
    // }
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
            <Upload mealImage={setMealImage} />
          </div>
          <div className='flex flex-col gap-y-5'>
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
            <div className='flex gap-x-2 items-center'>
              <input
                type='checkbox'
                id='customCheckbox'
                checked={checked}
                onChange={handleChange}
                required
              />
              <label htmlFor='' className='text-lg'>
                Packaging
              </label>
            </div>

            {checked && (
              <div className='w-full'>
                <div className='grid grid-cols-2 gap-x-2 items-center'>
                  <p className='text-xl'>Stryofoam</p>
                  <div className='flex gap-x-2'>
                    <div className='flex flex-col w-ful'>
                      <label htmlFor='name'>Price</label>
                      <div className='flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] relative '>
                        <input
                          title={'Price'}
                          type={'number'}
                          className='w-full outline-none border-none bg-transparent'
                          value={packaging.styrofoam.price}
                          onChange={(e) =>
                            handlePackagingChange(
                              'styrofoam',
                              'price',
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className='flex flex-col w-full'>
                      <label htmlFor=''>Status</label>
                      <select
                        value={packaging.styrofoam.status}
                        onChange={(e) =>
                          handlePackagingChange(
                            'styrofoam',
                            'status',
                            e.target.value
                          )
                        }
                        className='flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] outline-none'
                      >
                        {status.map((item, index) => (
                          <option
                            key={index}
                            value={item.value}
                            className='capitalize'
                          >
                            {item.status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-x-2 items-center'>
                  <p className='text-xl'>Plastic Plate</p>
                  <div className='flex gap-x-2'>
                    <div className='flex flex-col w-ful'>
                      <label htmlFor='name'>Price</label>
                      <div className='flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] relative '>
                        <input
                          title={'Price'}
                          type={'number'}
                          className='w-full outline-none border-none bg-transparent'
                          value={packaging.plastic_plate.price}
                          onChange={(e) =>
                            handlePackagingChange(
                              'plastic_plate',
                              'price',
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>

                    <div className='flex flex-col w-full'>
                      <label htmlFor=''>Status</label>
                      <select
                        value={packaging.plastic_plate.status}
                        onChange={(e) =>
                          handlePackagingChange(
                            'plastic_plate',
                            'status',
                            e.target.value
                          )
                        }
                        className='flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] outline-none'
                      >
                        {status.map((item, index) => (
                          <option
                            key={index}
                            value={item.value}
                            className='capitalize'
                          >
                            {item.status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=' flex justify-end w-full'>
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
            Create Meal
          </Button>
        </div>
      </form>
    </div>
  )
}

export default page
