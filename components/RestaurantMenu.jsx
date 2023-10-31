import React from 'react'
import Modal from './Modal'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const RestaurantMenu = ({ isOpen, setIsOpen, }) => {
    return (
        <div>
            <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
                <div className="">
                    <div className="">
                        <img src="/Rectangle 154.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1>Takeaway
                            <span>(Select menu for each takeaway)</span>
                        </h1>
                        <div className="flex flex-col">
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


                </div>
            </Modal>
        </div>
    )
}

export default RestaurantMenu