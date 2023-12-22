'use client'

import React from 'react'
import InputsCustom from '@/components/InputsCustom'
import Upload from '@/components/Upload'
const page = () => {
  const status = [
    { value: 1, status: 'True' },
    { value: 0, status: 'False' },
  ]

  const type = ['Meal', 'Groceries']
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      <div className='width grid grid-cols-2 gap-x-4'>
        <div className=''>
          <Upload />
        </div>
        <div className=''>
          <InputsCustom title={'Meal Name'} type={'text'} />
          <InputsCustom title={'Description'} type={'text'} />
          <InputsCustom title={'Meal Pack'} type={'text'} />
          <div className='flex flex-col w-full'>
            <label htmlFor=''>Item Type</label>
            <select
              name=''
              id=''
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
              name=''
              id=''
              className='flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] outline-none'
            >
              {status.map((item, index) => (
                <option key={index} value={item.value} className='capitalize'>
                  {item.status}
                </option>
              ))}
            </select>
          </div>
          <InputsCustom title={'Price'} type={'text'} />
        </div>
      </div>
    </div>
  )
}

export default page
