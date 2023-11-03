import React from 'react'

const CustomButton = ({ title, handleClick, containerStyles, type, Icon, disable_btn }) => {

    return (

        <button
            onClick={handleClick}
            className={containerStyles}
            type={type || 'button'}
            disabled={disable_btn || false}
        >
            {Icon && (
                <div className='text-[1.5rem]'>
                    {Icon}
                </div>
            )}
            <span>{title}</span>
        </button>

    )
}

export default CustomButton