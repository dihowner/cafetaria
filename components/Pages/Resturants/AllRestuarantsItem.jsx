import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { AllResturants } from '@/components/Utilis/Dummy'
import { randomFetch } from '@/components/Utilis/Fetch/RandomFetch'
import { useDispatch, useSelector } from 'react-redux'
import AppLoader from '@/components/AppLoader'
import { AiFillStar, AiFillMessage } from 'react-icons/ai'

const AllRestuarantsItem = ({ title }) => {
    const [status, setStatus] = useState('verified')
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const { getRestuarants, getRestuarantLoading, error } = randomFetch()
    const all = useCallback(() => {
        getRestuarants(status, page, setTotalPages)
    }, [status, page])
    useEffect(() => {
        all()
    }, [status, page])
    const handlePrevPage = () => {
        setPage(page - 1)
        setCurrentNum(page / page)
    }

    const handleNextPage = () => {
        setPage((page) => page + 1)
        setCurrentNum(page * 10)
    }
    const { usermeals } = useSelector((state) => state.rootReducers);
    // console.log(usermeals.meals)
    const AllResturant = usermeals?.restuarant
    return (
        <div className='flex justify-center w-full '>
            {getRestuarantLoading ? <AppLoader color={'#FF9C06'} loading={getRestuarantLoading} /> :
                <div className='flex flex-col gap-y-4 w-[100%] lg:w-[80%]'>
                    <div className=" flex gap-x-4 ">
                        <h1 className='font-[600] text-2xl'>All {title}</h1>
                    </div>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 w-full ">
                        {/* overflow-y-auto max-h-[600px] */}
                        {AllResturant && AllResturant.map((item, index) => (
                            <Link href={`/restuarant/${item?._id}`}
                                className='flex flex-col gap-y-2 scrollbar-none '
                                key={index}
                            >
                                <div className='w-full h-[200px] border'>
                                    {item?.store_image === null ? <img src={'/cafetarialogo.png'} alt='' className='object-fit w-[100%] h-full' /> : <img src={item?.store_image} alt='' className='object-fit w-[100%] h-full' />}

                                </div>

                                <h3 className='font-[600] text-lg'>{item?.store_name}</h3>
                                <div className=' flex flex-col  gap-y-4 '>
                                    <p className='font-[500] text-[#5B5B5B]'>{item?.store_address
                                    }</p>
                                    <div className='flex gap-x-2 items-center'>
                                        <span className='text-[#218B07]'>< AiFillStar /></span>
                                        <span>4.8 (300 Reviews)</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>}


        </div>

    )
}

export default AllRestuarantsItem