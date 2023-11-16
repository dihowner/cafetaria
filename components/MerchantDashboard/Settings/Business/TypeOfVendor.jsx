import React, { useState } from 'react'

const TypeOfVendor = () => {
    const [selectedMerchant, setSelectedMerchant] = useState('Groceries')
    const changeMerchant =(e)=>{
        setSelectedMerchant(e)
    }
    const [physicalShop, setPhysicalShop] = useState('Yes')
    const changephysicalShop =(e)=>{
        setPhysicalShop(e)
    }
    return (
        <div className='col-span-1 w-full capitalize flex flex-col sm:flex-row sm:justify-between md:flex-col md:justify-start gap-y-8 order-1 md:order-2 gap-x-6'>
            <div className="bg-[#218B07] sm:w-1/2 md:w-full pt-4 pb-8 flex justify-center items-center text-2xl text-white h-[150px] ">
                <div className="flex justify-center items-center flex-col w-[80%] gap-y-4">
                    <h1 className='text-center font-semibold'>Choose Merchant </h1>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-center items-center text-center cursor-pointer" onClick={(e) => changeMerchant('Groceries')} >
                            <span className='font-medium'>Groceries</span>
                            <div className={`${selectedMerchant === 'Groceries' ? 'h-6 w-6 rounded-full bg-white' :'h-6 w-6 rounded-full bg-transparent border'}`}></div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center cursor-pointer" onClick={(e) => changeMerchant('Restaurants')}>
                            <span className='font-medium'>Restaurants</span>
                            <div className={`${selectedMerchant === 'Restaurants' ? 'h-6 w-6 rounded-full bg-white' : 'h-6 w-6 rounded-full bg-transparent border'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-transparent pt-4 pb-8 sm:w-1/2 md:w-full flex justify-center items-center text-2xl text-black border border-black h-[150px] ">
                <div className="flex justify-center items-center flex-col w-[80%] gap-y-4">
                    <h1 className='text-center font-semibold'>Do you own a physical shop? </h1>
                    <div className="flex justify-between w-1/2">
                        <div className="flex flex-col justify-center items-center text-center cursor-pointer" onClick={(e) => changephysicalShop('Yes')} >
                            <span className='font-medium'>Yes</span>
                            <div className={`${physicalShop === 'Yes' ? 'h-6 w-6 rounded-full bg-black' : 'h-6 w-6 rounded-full bg-transparent border-black border'}`}></div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center cursor-pointer" onClick={(e) => changephysicalShop('No')}>
                            <span className='font-medium'>No</span>
                            <div className={`${physicalShop === 'No' ? 'h-6 w-6 rounded-full bg-black' : 'h-6 w-6 rounded-full bg-transparent border-black border'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeOfVendor