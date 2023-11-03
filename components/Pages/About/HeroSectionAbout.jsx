import CustomButton from '@/components/CustomButton'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const HeroSectionAbout = () => {
    return (
        <div className='flex justify-center items-center w-[100%]'>
            <div className="width flex flex-col md:flex-row justify-between mt-6 gap-y-4 md:gap-y-0 ">
                <div className="flex flex-col justify-center w-[100%] md:w-[45%] gap-y-6 py-6">
                    <h1 className=' text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[4.9rem] font-[800] '>
                        <span className='text-[#FF9C06]'> Cafeteria </span>
                        makes it easy
                    </h1>
                    <p className='font-[500] w-[90%]'>
                        Cafeteria is your one stop shop for varieties of food, groceries
                        and swift deliveries.
                    </p>
                    <div className="flex w-[100%] flex-col lg:flex-row gap-y-4 gap-x-2 ">
                        <div className="bg-[#83838326] flex items-center gap-x-2 py-4 px-2 text-base w-[80%] sm:w-[70%] md:w-[70%]">
                            <span><HiOutlineLocationMarker /></span>
                            <input type="text" placeholder='Enter your nearby location' className='bg-[transparent] outline-none border-none w-[100%]' />
                        </div>

                        <CustomButton
                            title='Find restaurants'
                            containerStyles=' bg-[#FF9C06]  py-4 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[50%] sm:w-[40%]'

                        />
                    </div>
                </div>

                <div className='w-[100%] md:w-[45%] justify-center flex'>
                    <img src="/Group 105.png" alt="Hero image" className='w-[80%] md:w-[100%] h-[100%]' />
                </div>
            </div>
        </div>
    )
}

export default HeroSectionAbout