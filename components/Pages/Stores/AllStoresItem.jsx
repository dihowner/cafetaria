import Link from 'next/link'
import React from 'react'
import { AllStores } from '@/components/Utilis/Dummy'
const AllRestuarantsItem = ({ title }) => {
    return (
        <div className='flex flex-col gap-y-4 w-[100%] lg:w-[80%]'>
            <div className=" flex gap-x-4 ">
                <h1 className='font-[600] text-2xl'>All {title}</h1>

            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6  ">
                {/* overflow-y-auto max-h-[600px] */}
                {AllStores.map((item, index) => (
                    <Link href={`/stores/${item.id}`}
                        className='flex flex-col gap-y-2 scrollbar-none '
                        key={index}
                    >
                        <div className='w-full'>
                            <img src={item.image} alt='' className='object-fit w-[100%]' />
                        </div>

                        <h3 className='font-[600] text-lg'>{item.name}</h3>
                        <div className=' flex flex-col  gap-y-4 '>
                            <p className='font-[500] text-[#5B5B5B]'>{item.descpription}</p>
                            <div className='flex gap-x-2 items-center'>
                                <span className='text-[#218B07]'>{item.ratings}</span>
                                <span>{item.Reviews}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default AllRestuarantsItem