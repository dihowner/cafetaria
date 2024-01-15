import React from 'react'
import Button from '@mui/material/Button';
const CustomButton = ({ title, handleClick, containerStyles, type, Icon, disable_btn }) => {

    return (

        <button
            onClick={handleClick}
            className={containerStyles}
            type={type || 'button'}
            disabled={disable_btn || false}
        >
            {Icon && (
                <div className='text-[1rem]'>
                    {Icon}
                </div>
            )}
            <span>{title}</span>
        </button>

    )
}

export default CustomButton