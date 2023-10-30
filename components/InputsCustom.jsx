import React from 'react'

const InputsCustom = ({ title, value, onchange, Icon,type }) => {
    const handleOnchange = (e) => {
        onchange(e.target.value);
    }
    return (
        <div className=' flex flex-col gap-y-3'>
            <label htmlFor="name">{title}</label>
            <div className="flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] ">
                <span>{Icon}</span>
                <input  type={type || 'text'} value={value} onChange={handleOnchange} className='w-full outline-none border-none bg-transparent' />
            </div>
        </div>
    )
}

export default InputsCustom