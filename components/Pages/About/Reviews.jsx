import React from 'react'
import { reviews } from '../../Utilis/Dummy'
const Reviews = () => {
    return (
        <div className='w-full flex justify-center flex-col gap-y-6 items-center '>
            <div className="width grid grid-cols-1 gap-y-6 gap-x-6 md:grid-cols-2 lg:grid-cols-3  ">
                {reviews.map((item, index) => (
                    <div className="flex gap-x-4 justify-center border rounded-lg p-4 w-full">
                        <div className="w-12 h-12">
                            <img src={item.image} alt="" srcSet="" className='rounded-[100%] w-full h-full ' />
                        </div>
                        <div className="flex flex-col gap-y-2 w-[80%]">
                            <h4 className='text-lg'>{item.name}</h4>
                            <div className="flex items-center text-[#FF9C06] ">
                                <span>{item.reviews}</span>
                                <span>{item.reviews}</span>
                                <span>{item.reviews}</span>
                                <span>{item.reviews}</span>
                            </div>
                            <p className='text-sm'>{item.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Reviews