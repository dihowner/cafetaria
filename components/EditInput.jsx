import React, { useState } from 'react'
const EditInput = ({ reff, defaultValue, type, placeholder, title, disabled }) => {


    return (
        <div className=' flex flex-col w-full text-sm'>
            <label htmlFor="name">{title}</label>
            <div className="flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] relative ">
                <input type={type || 'text'} ref={reff}
                    defaultValue={defaultValue} placeholder={placeholder} className='w-full outline-none border-none bg-transparent text-sm'
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

export default EditInput