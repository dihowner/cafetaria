import React from 'react'
import Mostvisited from '../Resturants/Mostvisited'
import CustomFilter from '@/components/Utilis/CustomFilter'
import AllRestuarantsItem from '../Resturants/AllRestuarantsItem'
import { AllStores } from '@/components/Utilis/Dummy'
const AllStore = () => {
    return (
        <div className="w-[100%] flex justify-center items-center py-6">
            <div className='width flex gap-x-8 flex-col lg:flex-row'>
                <CustomFilter title='Stores' data='1200 Stores' />
                <AllRestuarantsItem title='Stores' data={AllStores} />
            </div>
        </div>

    )
}

export default AllStore