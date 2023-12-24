import React, { useState } from 'react'
import Modal from './Modal'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LiaTimesSolid } from 'react-icons/lia'
import CustomButton from './CustomButton';
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
const RestaurantMenu = ({ isOpen, setIsOpen, }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <div>
            <Modal isOpen={isOpen} close={() => setIsOpen(false)} height='800px'>
                <div className="">
                    <span className='bg-[#FF9C06] p-2 h-12 justify-center flex items-center rounded-xl absolute top-0 right-0 text-white'
                        onClick={() => setIsOpen(false)}>
                        <LiaTimesSolid className='text-xl' />
                    </span>
                    <div className="">
                        <img src="/Rectangle 154.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1>Takeaway
                            <span>(Select menu for each takeaway)</span>
                        </h1>
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={< Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label="Fried Rice" className='w-[80%]' />
                                <div className="w-[20%] flex items-center justify-center gap-x-4">
                                    <span className='w-full  flex items-center justify-center'>400</span>
                                    {isChecked && (
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
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={< Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label=" Rice" className='w-[80%]' />
                                <div className="w-[20%] flex items-center justify-center gap-x-4">
                                    <span className='w-full  flex items-center justify-center'>400</span>
                                    {isChecked && (
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
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice & fried Rice" />
                                <span>400</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-[white] py-4 px-2 rounded-xl shadow-xl">
                                <h1>Extra    <span>(Can add up to 3 per takeaway)</span></h1>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-[white] py-4 px-2 rounded-xl shadow-xl">
                                <h1>Extra    <span>(Can add up to 3 per takeaway)</span></h1>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-[white] py-4 px-2 rounded-xl shadow-xl">
                                <h1>Extra    <span>(Can add up to 3 per takeaway)</span></h1>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <FormControlLabel control={<Checkbox />} label="Jollof Rice" />
                                <span>400</span>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full flex justify-center items-center gap-x-6">
                        <div className="flex justify-center items-center gap-x-6 bg-white w-[50%] py-4 px-4 text-2xl">
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


