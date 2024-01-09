import React from 'react'
import { useState, CSSProperties } from "react";
import { ScaleLoader } from "react-spinners";
const AppLoader = ({ loading, color }) => {
    
    return (
        <div className='loader'>
            <ScaleLoader
                color={color}
                loading={loading}
                speedMultiplier={'1.2'}
            />
        </div>

    )
}

export default AppLoader