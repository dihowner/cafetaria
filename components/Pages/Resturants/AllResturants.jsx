import CustomFilter from '@/components/Utilis/CustomFilter'
import React from 'react'
import AllRestuarantsItem from './AllRestuarantsItem'
import { AllResturants } from '@/components/Utilis/Dummy'
const AllResturant = () => {
    return (
        <div className='w-[100%] flex justify-center items-center py-6'>
            <div className="width flex gap-x-8 flex-col lg:flex-row">
                <CustomFilter title='Restuarants' data='328 restaurants' />
                <AllRestuarantsItem title='Restuarants'
                data={AllResturants} />
            </div>
        </div>


    )
}

export default AllResturant