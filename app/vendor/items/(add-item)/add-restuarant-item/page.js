'use client'

import React, { useState } from 'react'
import InputsCustom from '@/components/InputsCustom'
import Upload from '@/components/Upload'
import CustomButton from '@/components/CustomButton'
const page = () => {
  const status = [
    { value: true, status: 'True' },
    { value: false, status: 'False' },
  ]

  const type = ['Meal', 'Groceries']
  const [formData, setFormData] = useState({
    description: '',
    mealImage: null,
    name: '',
    meal_type: null,
    is_available: null,
    unit_price: '',
  })

  const handleImageUpload = (file) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      // Set the selected image data in the form data
      setFormData({
        ...formData,
        mealImage: e.target.result,
      })
    }

    reader.readAsDataURL(file)
  }

  const handlesubmit = (e) => {
    e.preventDefault()
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
            <Upload onImageUpload={handleImageUpload} />
          </div>
          <div className=''>
            <InputsCustom
              title={'Meal Name'}
              type={'text'}
              value={formData.name}
              onchange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target?.value,
                })
              }
            />
            <InputsCustom
              title={'Description'}
              type={'text'}
              value={formData.description}
              onchange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target?.value,
                })
              }
            />
            {/* <InputsCustom title={'Meal Pack'} type={'text'} /> */}
            <div className='flex flex-col w-full'>
              <label htmlFor=''>Item Type</label>
              <select
                name=''
                id=''
                value={formData.meal_type || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    meal_type: e.target?.value,
                  })
                }
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
                value={formData.is_available || 'true'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    is_available: e.target?.value,
                  })
                }
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
              value={formData.unit_price}
              onchange={(e) =>
                setFormData({
                  ...formData,
                  unit_price: e.target?.value,
                })
              }
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
