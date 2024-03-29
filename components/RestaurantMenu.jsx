import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LiaTimesSolid } from 'react-icons/lia'
import CustomButton from './CustomButton';
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import { randomFetch } from '@/components/Utilis/Fetch/RandomFetch'
import AppLoader from './AppLoader';
import { useDispatch, useSelector } from 'react-redux'

const RestaurantMenu = ({ isOpen, setIsOpen, mealDetails }) => {
    const [checkedItem, setCheckedItem] = useState(null);

    const handleCheckboxChange = (itemName) => {
        setCheckedItem(itemName);
    };


    const { error, getCategoryLoading } = randomFetch()

    const { usermeals } = useSelector((state) => state.rootReducers)
    const subMeals = usermeals?.submeals
    return (
        <div>
            <Modal isOpen={isOpen} close={() => setIsOpen(false)} height='600px'>
                <div className="text-sm flex flex-col gap-y-4">
                    <span className='bg-[#FF9C06] p-2 h-12 justify-center flex items-center rounded-xl absolute top-0 right-0 text-white'
                        onClick={() => setIsOpen(false)}>
                        <LiaTimesSolid className='text-xl' />
                    </span>
                    <div className="h-[200px] w-full">
                        <img src={mealDetails?.image} alt="" className='w-full h-full' />
                    </div>
                    {getCategoryLoading ? <AppLoader loading={getCategoryLoading} color='#FF9C06' /> : <div className="flex flex-col gap-y-4">
                        <h1>Takeaway
                            <span>(Select menu for each takeaway)</span>
                        </h1>
                        <div className="flex flex-col">
                            {mealDetails?.packaging && Object?.entries(mealDetails?.packaging).map(([itemName, item], index) => (

                                <div className="flex justify-between items-center capitalize text-sm" >


                                    <FormControlLabel control={< Checkbox checked={checkedItem === itemName}
                                        onChange={() => handleCheckboxChange(itemName)} />} label={itemName} className='w-[80%] text-sm' />
                                    <div className="w-[20%] flex items-center justify-center gap-x-4">
                                        <span className='w-full  flex items-center justify-center'>{item.price}</span>
                                        {checkedItem === itemName && (
                                            <div className="flex justify-center items-center gap-x-4">
                                                <span>
                                                    <IoAddCircle />
                                                </span>
                                                <span className="text-underline">{1}</span>
                                                <span>
                                                    <AiFillMinusCircle />
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            ))}
                        </div>
                        {subMeals && subMeals.map((item, index) => (
                            <div className="flex flex-col capitalize" key={index}>
                                <div className="bg-[white] py-4 px-2 rounded-xl shadow-xl">
                                    <h1>{item?.name} <span>(Can add up to 3 per takeaway)</span></h1>
                                </div>
                                {item?.submeals.map((item, index) => (
                                    <div className="flex justify-between items-center">
                                        <FormControlLabel control={<Checkbox />} label={item?.name} className='capitalize' />
                                        <span>{item?.unitPrice}</span>
                                    </div>
                                ))}

                            </div>
                        ))}

                    </div>}

                    <div className="w-full flex justify-center items-center gap-x-6">
                        <div className="flex justify-center items-center gap-x-6 bg-white w-[50%] py-4 px-4 text-sm">
                            <span><IoAddCircle /></span>
                            <span className='text-underline'>{1}</span>
                            <span>{<AiFillMinusCircle />}</span>
                        </div>
                        <CustomButton title='Add to cart'
                            containerStyles='text-[white] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 bg-[#FF9C06] w-[50%] capitalize' />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default RestaurantMenu


