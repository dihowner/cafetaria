import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex justify-center items-center bg-[#F6F6F6] w-[100%]'>
            <div className="width flex justify-between border">
                <div className="flex flex-col justify-center  w-[45%]">
                    <h1 className='text-5xl'>One stop
                        for all <span className=''>Kinds</span>
                        Of Delicacies.
                    </h1>
                    <p>Cafeteria is your one stop shop for varieties of food, groceries
                        and swift deliveries.
                    </p>
                    <div className="">
                        <div className="">
                            <input type="text" />
                        </div>
                        <div className="">
                            Find restaurants
                        </div>
                    </div>
                </div>
                <div className='w-[45%]'>
                    <img src="/HeroImage.png" alt="Hero image" className='w-[70%]' />
                </div>
            </div>


        </div>
    )
}

export default HeroSection