import React from 'react'
import { ScaleLoader } from "react-spinners";
const LoaderTwo = ({ loading, color }) => {
    return (
        // <div class="content">
            <div class="overlay">
                <div class="overlay-content flex justify-center items-center h-[100vh]">
                    <ScaleLoader
                        color={color}
                        loading={loading}
                        speedMultiplier={'1.2'}
                    />
                </div>
            </div>
        // </div>
    )
}

export default LoaderTwo