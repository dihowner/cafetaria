import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'

const EachRest = ({ restuarantsDetails }) => {
    return (
        <div>
            <div className="">
                <div className="">
                    <h1>{restuarantsDetails.name}</h1>
                    <p>{restuarantsDetails.description}</p>
                    <div className='flex gap-x-2 items-center'>
                        <span className='text-[#218B07]'>{restuarantsDetails.ratings}</span>
                        <span>{restuarantsDetails.Reviews}</span>
                    </div>
                    <div className="">
                        <span><MdOutlineLocationOn/></span>
                        {restuarantsDetails.location}
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default EachRest