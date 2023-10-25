import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex justify-center items-center bg-[#F6F6F6] w-[100%]'>
            <div className="width flex flex-col md:flex-row justify-between mt-6 gap-y-4 md:gap-y-0">
                <div className="flex flex-col justify-center w-[100%] md:w-[45%]">
                    <h1 className=' text-[2.5rem] md:text-[4.9rem] font-[800] '>One stop
                        for all <span className='bg-[#218B07] text-white rounded-full p-2'>Kinds</span>
                        Of Delicacies.
                    </h1>
                    <p className='font-[500] w-[90%]'>
                        Cafeteria is your one stop shop for varieties of food, groceries
                        and swift deliveries.
                    </p>
                    {/* <div className="flex w-[100%] ">
                        <div className="">
                            <input type="text" placeholder='' />
                        </div>
                        <div className="">
                            Find restaurants
                        </div>
                    </div> */}
                </div>
                <div className='w-[100%] md:w-[45%] justify-center flex'>
                    <img src="/HeroImage.png" alt="Hero image" className='w-[80%] md:w-[100%] h-[100%]' />
                </div>
            </div>


        </div>
    )
}

export default HeroSection