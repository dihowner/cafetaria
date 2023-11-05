import React from 'react'

const page = () => {
    return (
        <div>
            <h1>Order  Details </h1>

            <select
                className='px-4 py-2 border rounded-lg outline-none bg-transparent'

            >
                <option value='' disabled selected>
                    Change status
                </option>
                <option value="">In progress</option>
                <option value="">Succesful</option>
                <option value="">Failed</option>
            </select>
        </div>
    )
}

export default page