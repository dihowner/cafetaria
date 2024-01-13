import React, { useEffect, useState } from 'react'
import Switch from '@mui/material/Switch'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '@/components/Loader'
import Link from 'next/link'
import DeleteItemModal from './DeleteItemModal'
import AppLoader from '@/components/AppLoader'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import AddSubMeal from './AddSubMeal'
import CreatCategory from './CreateCategory'

const ResturantItems = () => {

    const { meals } = useSelector((state) => state.rootReducers);
    const { getMeals, getMealLoading, error, changeAvailabilty, loading, getMealCategories, getCategoryLoading, } = mealsfetch()
    useEffect(() => {
        getMeals()
    }, [])
    const allMeals = meals?.meals
    const noMealMessage = allMeals && allMeals.length === 0 ? 'No meal Created' : null
    const [itemId, setItemId] = useState()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => {
        setIsOpenModal(true)
    }
    const [isSubOpenModal, setIsSubOpenModal] = useState(false)
    const openSubModal = () => {
        setIsSubOpenModal(true)
    }
    const [isCategoryOpenModal, setIsCategoryOpenModal] = useState(false)
    const openCategoryModal = () => {
        setIsCategoryOpenModal(true)
    }
    const changeavai = async (item) => {
        const updatedAvailability = { ...item, isAvailable: !item.isAvailable };
        const mealId = item?._id
        const formData = new FormData();
        formData.append('isAvailable', updatedAvailability)
        await changeAvailabilty(formData, mealId)
    }
    const handleClick = (item) => {

        openCategoryModal()
        setItemId(item)
        // console.info(`You clicked ${'22222'}`);
    };
    const [open, setOpen] = React.useState(allMeals ? Array(allMeals.length).fill(false) : []);
    const handleToggle = (index) => {
        setOpen((prevStates) => {
            const newStates = Array.isArray(prevStates) ? [...prevStates] : [];
            newStates[index] = !newStates[index];
            return newStates;
        });

        // setOpen((prevOpen) => !prevOpen);
    };
    const anchorRef = React.useRef(null);
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const getcategory = async (id) => {
        await getMealCategories(id)
    }



    return (
        <>
            {loading ? <AppLoader loading={loading} color={'#5f8357'} /> : null}
            {getMealLoading ? <AppLoader color={'#5f8357'} loading={getMealLoading} /> : <>
                {noMealMessage ? (
                    <div className=''>
                        {noMealMessage}
                    </div>
                ) : (<div className='overflow-x-auto w-[100%]'>
                    <div className='inline-block min-w-full'>
                        <div className='overflow-hidden'>
                            <table className='min-w-full'>
                                <thead className='border-b'>
                                    <tr className='capitalize'>
                                        <td
                                            scope='col'
                                            className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                                        >
                                            sn
                                        </td>
                                        <td
                                            scope='col'
                                            className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                                        >
                                            Preview
                                        </td>
                                        <td
                                            scope='col'
                                            className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                                        >
                                            Name
                                        </td>

                                        <td
                                            scope='col'
                                            className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                                        >
                                            Unit Price
                                        </td>
                                        <td
                                            scope='col'
                                            className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                                        >
                                            Availability
                                        </td>
                                        <td
                                            scope='col'
                                            className='text-lg font-bold text-[#5f8357] px-6 py-4 text-left'
                                        >
                                            Action
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {error ? (<div className='text-center text-3xl w-full capitalize'>{error}</div>) : (<>
                                        {allMeals && allMeals.map((item, index) => (
                                            <tr className='border-b capitalize p-8' key={index}>
                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                                    {index + 1}
                                                </td>
                                                <td>
                                                    <div className=' border rounded-lg m-2 py-1 w-[40%] flex justify-center items-center'>
                                                        <img
                                                            className='w-12 h-12 rounded-full object-cover'
                                                            src={item?.image}
                                                            alt='image'
                                                        />
                                                    </div>
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                                    {item.name}
                                                </td>

                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                                    {item?.unitPrice}
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                                                    <Switch
                                                        checked={item?.isAvailable}
                                                        onChange={() => changeavai(item)}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        sx={{
                                                            '& .MuiSwitch-switchBase.Mui-checked': {
                                                                color: '#5f8357',
                                                            },
                                                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                                backgroundColor: '#4CAF50',
                                                            },
                                                        }}
                                                    />
                                                </td>
                                                <td className=' vendoritembtn text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'
                                                // ref={anchorRef}
                                                >
                                                    <ButtonGroup variant="contained" aria-label="split button"
                                                        sx={{
                                                            backgroundColor: '#218B07', // Set the background color to green
                                                        }}>
                                                        <Button onClick={() => handleClick(item)}
                                                            sx={{
                                                                backgroundColor: '#218B07',
                                                                color: '#ffffff',
                                                                borderColor: 'solid #218B07',
                                                                '&:hover': {
                                                                    backgroundColor: '#218B07',
                                                                },
                                                            }}>Create Category</Button>
                                                        <Button
                                                            size="small"
                                                            aria-controls={open[index] ? 'split-button-menu' : undefined}
                                                            aria-expanded={open[index] ? 'true' : undefined}

                                                            onClick={() => handleToggle(index)}
                                                            sx={{
                                                                backgroundColor: '#218B07',
                                                                color: '#ffffff',
                                                                border: '#218B07',
                                                                '&:hover': {
                                                                    backgroundColor: '#218B07',
                                                                },
                                                            }}
                                                            ref={anchorRef}
                                                        >
                                                            <ArrowDropDownIcon />
                                                        </Button>
                                                        <Popper
                                                            sx={{
                                                                zIndex: 1,

                                                            }}
                                                            // open={open}
                                                            // anchorEl={anchorRef.current}
                                                            // role={undefined}
                                                            // transition
                                                            // disablePortal
                                                            open={open[index]}
                                                            anchorEl={anchorRef.current}
                                                            role={undefined}
                                                            transition
                                                            disablePortal

                                                        >
                                                            {({ TransitionProps, placement }) => (
                                                                <Grow
                                                                    {...TransitionProps}
                                                                // style={{
                                                                //     transformOrigin:
                                                                //         placement === 'bottom' ? 'center top' : 'center bottom',
                                                                // }}
                                                                >
                                                                    <Paper >
                                                                        <ClickAwayListener onClickAway={handleClose}>
                                                                            <MenuList id="split-button-menu" autoFocusItem>
                                                                                <MenuItem>
                                                                                    <Link href={`items/restaurant/meals/edit/${item?._id}`} className='py-1 px-2.5 flex gap-x-2 text-xl items-center text-[#218B07] '>

                                                                                        <p>Edit</p>
                                                                                    </Link>
                                                                                </MenuItem>
                                                                                <MenuItem onClick={() => {
                                                                                    openModal()
                                                                                    setItemId(item)
                                                                                    setOpen(false)
                                                                                }}>
                                                                                    <div className='py-1 px-2.5 flex gap-x-2 text-xl items-center text-[#218B07]'>

                                                                                        <p>Delete</p>
                                                                                    </div>

                                                                                </MenuItem>
                                                                                <MenuItem>
                                                                                    <Link href={`items/restaurant/meals/details/${item?._id}`} className='py-1 px-2.5 flex gap-x-2 text-xl items-center text-[#218B07]'>

                                                                                        <p>View Details</p>
                                                                                    </Link>

                                                                                </MenuItem>
                                                                                <MenuItem
                                                                                    onClick={() => {
                                                                                        openSubModal();
                                                                                        setItemId(item);
                                                                                        setOpen(false)
                                                                                        getcategory(item?._id)
                                                                                    }
                                                                                    }>
                                                                                    <p className='py-1 px-2.5 flex gap-x-2 text-xl items-center text-[#218B07]'>
                                                                                        Create-Submeal
                                                                                    </p>

                                                                                </MenuItem>
                                                                            </MenuList>
                                                                        </ClickAwayListener>
                                                                    </Paper>
                                                                </Grow>
                                                            )}
                                                        </Popper>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        ))}</>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>)}
            </>
            }
            <DeleteItemModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} itemID={itemId} />
            <AddSubMeal isOpenModal={isSubOpenModal} setIsOpenModal={setIsSubOpenModal} itemID={itemId} />
            <CreatCategory isOpenModal={isCategoryOpenModal} setIsOpenModal={setIsCategoryOpenModal} itemID={itemId} />
        </>

    )
}

export default ResturantItems