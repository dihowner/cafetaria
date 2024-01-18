import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Map from '@/components/Map';
const TypeOfVendor = ({ setisPhysicalStore, value }) => {
    const handleChange = (event) => {
        setisPhysicalStore(event.target.value);
    };
    return (
        <div className=' w-full capitalize flex flex-col sm:flex-row sm:justify-between md:flex-col md:justify-start gap-y-8 gap-x-6'>
            <div className="bg-transparent pt-4 pb-8 sm:w-1/2 md:w-[80%] flex justify-center items-center text-base text-black border border-black min-h-[100px] ">
                <div className="flex justify-center items-center flex-col w-[100%] gap-y-4">
                    <FormLabel id="demo-radio-buttons-group-label"><h1 className='text-center font-semibold'>Do you own a physical shop? </h1> </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue={defaultValue}
                        // ref={reff}
                        value={value}
                        onChange={handleChange}
                        name="radio-buttons-group"

                    >
                        <div className="flex justify-between items-center w-1/2"> <FormControlLabel value={true} control={<Radio sx={{ color: '#218B07', '&.Mui-checked': { color: '#218B07' } }} />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio sx={{ color: '#218B07', '&.Mui-checked': { color: '#218B07' } }} />} label="No" /></div>
                    </RadioGroup>
                </div>

            </div>
            {value === true ? <Map /> : null}
        </div>
    )
}

export default TypeOfVendor

// const [selectedMerchant, setSelectedMerchant] = useState('Groceries')
// const changeMerchant = (e) => {
//     setSelectedMerchant(e)
// }

{/* <div className="bg-[#218B07] sm:w-1/2 md:w-full pt-4 pb-8 flex justify-center items-center text-2xl text-white h-[150px] ">
                <div className="flex justify-center items-center flex-col w-[80%] gap-y-4">
                    <h1 className='text-center font-semibold'>Choose Merchant </h1>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-center items-center text-center cursor-pointer" onClick={(e) => changeMerchant('Groceries')} >
                            <span className='font-medium'>Groceries</span>
                            <div className={`${selectedMerchant === 'Groceries' ? 'h-6 w-6 rounded-full bg-white' : 'h-6 w-6 rounded-full bg-transparent border'}`}></div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center cursor-pointer" onClick={(e) => changeMerchant('Restaurants')}>
                            <span className='font-medium'>Restaurants</span>
                            <div className={`${selectedMerchant === 'Restaurants' ? 'h-6 w-6 rounded-full bg-white' : 'h-6 w-6 rounded-full bg-transparent border'}`}></div>
                        </div>
                    </div>
                </div>
            </div> */}