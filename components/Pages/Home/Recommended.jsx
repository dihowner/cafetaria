
'use client'
import React, { useRef,useEffect } from 'react'
import MostVisteedItem from '../../Pages/Resturants/MostVisteedItem'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const Recommended = () => {
    const scrollref = useRef(null)
    const scrollInterval = useRef(null);
    const scroll = (direction) => {
        const { current } = scrollref
        if (direction === 'left') {
            current.scrollLeft -= 250
        } else {
            current.scrollLeft += 250
        }
    }
    useEffect(() => {
        // Function to automatically scroll to the right
        const autoScroll = () => {
            const { current } = scrollref;
            current.scrollLeft += 1; // Adjust the scroll speed as needed
            if (current.scrollLeft + current.clientWidth >= current.scrollWidth) {
                // Reset the scroll position to the beginning
                current.scrollLeft = 0;
            }
        };

        // Start the automatic scrolling with a specified interval
        scrollInterval.current = setInterval(autoScroll, 30); // Adjust the interval as needed

        // Cleanup the interval when the component unmounts
        return () => {
            clearInterval(scrollInterval.current);
        };
    }, []);
    return (
        <div className='flex w-[100%] flex-col gap-x-4 gap-y-8 justify-center items-center'>
            <div className='width flex flex-col gap-y-8'>
                <h1 className='font-[700] text-3xl text-[#000000B8]'>
                 Recommended
                </h1>
                <div className='w-[100%] relative'>
                    <MostVisteedItem scrollref={scrollref} scroll={scroll} />
                    <div className='w-full flex justify-between absolute items-center bottom-[60%]'>
                        <div
                            className='bg-[#FF9C06] rounded-full text-lg flex justify-center items-center w-[40px] h-[40px] text-white'
                            onClick={() => scroll('left')}
                        >
                            <FaArrowLeft className='text-[1.5rem]' />
                        </div>
                        <div
                            className='bg-[#FF9C06] rounded-full text-lg flex justify-center items-center w-[40px] h-[40px] text-white'
                            onClick={() => scroll('right')}
                        >
                            <FaArrowRight className='text-[1.5rem]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended