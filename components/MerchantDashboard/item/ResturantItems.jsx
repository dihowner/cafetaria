import React, { useCallback, useEffect, useState } from 'react'
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
import LoaderTwo from '@/components/Utilis/LoaderTwo'

const ResturantItems = ({ status, page, currentNum, setTotalPages }) => {

    const { meals } = useSelector((state) => state.rootReducers);
    const { getMeals, getMealLoading, error, changeAvailabilty, loading, getMealCategories, getCategoryLoading, } = mealsfetch()

    const all = useCallback(() => {
        getMeals(status, page, setTotalPages)
    }, [status, page])
    useEffect(() => {
        all()
    }, [status, page])

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
        const updatedAvailability = !item.isAvailable
        const mealId = item?._id
        const data = {
            is_available: updatedAvailability
        }
        await changeAvailabilty(data, mealId, status, page)
        // console.log("first", item?.name)
    }
    const handleClick = (item) => {

        openCategoryModal()
        setItemId(item?._id)
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
        if (anchorRef?.current && anchorRef?.current?.contains(event?.target)) {
            return;
        }
        setOpen(false);
    };
    const getcategory = async (id) => {
        await getMealCategories(id)
    }



    return (
        <>
            {loading ? <LoaderTwo color={'#5f8357'} loading={loading} /> : null}
            {/* {getMealLoading ? <AppLoader color={'#5f8357'} loading={getMealLoading} /> :  */}
            <>
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
                                            className='text-sm  text-[#5f8357] px-1 py-1 font-bold whitespace-nowrap text-center'
                                        >
                                            sn
                                        </td>
                                        <td
                                            scope='col'
                                            className='text-sm  text-[#5f8357] px-1 py-1 font-bold whitespace-nowrap text-center'
                                        >
                                            Preview
                                        </td>
                                        <td
                                            scope='col'
                                            className='text-sm  text-[#5f8357] px-1 py-1 font-bold whitespace-nowrap text-center'
                                        >
                                            Name
                                        </td>

                                        <td
                                            scope='col'
                                            className='text-sm  text-[#5f8357] px-1 py-1 font-bold whitespace-nowrap text-center'
                                        >
                                            Unit Price
                                        </td>
                                        <td
                                            scope='col'
                                            className='text-sm  text-[#5f8357] px-1 py-1 font-bold whitespace-nowrap text-center'
                                        >
                                            Availability
                                        </td>
                                        <td
                                            scope='col'
                                            className='text-sm text-[#5f8357] px-1 py-1 font-bold whitespace-nowrap text-center'
                                        >
                                            Action
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {error ? (<div className='text-center text-2xl w-full capitalize'>{error}</div>) : (<>
                                        {allMeals && allMeals.map((item, index) => (
                                            <tr className='border-b capitalize p-2' key={index}>
                                                <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-center'>
                                                    {currentNum + index + 1}
                                                </td>
                                                <td className='text-center flex justify-center items-center'>
                                                    <div className=' border rounded-lg m-2 py-1 w-[40%] flex justify-center items-center'>
                                                        <img
                                                            className='w-8 h-8 rounded-full object-cover'
                                                            src={item?.image}
                                                            alt='image'
                                                        />
                                                    </div>
                                                </td>
                                                <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-center'>
                                                    {item.name}
                                                </td>

                                                <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-center'>
                                                    {item?.unitPrice}
                                                </td>
                                                <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-center'>
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
                                                <td className=' vendoritembtn text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap text-center'
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
                                                                fontSize: '0.75rem',
                                                                '&:hover': {
                                                                    backgroundColor: '#218B07',
                                                                },
                                                            }}
                                                            size="small">Create Category</Button>
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

                                                            open={open[index]}
                                                            size="small"
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
                                                                                    <Link href={`restaurant/edit-meal/${item?._id}`} className='py-1 px-1 flex gap-x-2 text-sm items-center text-[#218B07] '>

                                                                                        <p>Edit</p>
                                                                                    </Link>
                                                                                </MenuItem>
                                                                                <MenuItem onClick={() => {
                                                                                    openModal()
                                                                                    setItemId(item)
                                                                                    setOpen(false)
                                                                                    handleClose()
                                                                                }}>
                                                                                    <div className='py-1 px-1 flex gap-x-2 text-sm items-center text-[#218B07]'>

                                                                                        <p>Delete</p>
                                                                                    </div>

                                                                                </MenuItem>
                                                                                <MenuItem>
                                                                                    <Link href={`restaurant/meals/details/${item?._id}`} className='py-1 px-1 flex gap-x-2 text-sm items-center text-[#218B07]'>

                                                                                        <p>View Details</p>
                                                                                    </Link>

                                                                                </MenuItem>
                                                                                {/* <MenuItem
                                                                                    onClick={() => {
                                                                                        openSubModal();
                                                                                        setItemId(item);
                                                                                        setOpen(false)
                                                                                        getcategory(item?._id)
                                                                                    }
                                                                                    }>
                                                                                    <p className='py-1 px-1 flex gap-x-2 text-sm items-center text-[#218B07]'>
                                                                                        Create-Submeal
                                                                                    </p>

                                                                                </MenuItem> */}
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
                </div>
                )}
            </>
            {/* } */}
            <DeleteItemModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} itemID={itemId} status={status}
                page={page} />
            <AddSubMeal isOpenModal={isSubOpenModal} setIsOpenModal={setIsSubOpenModal} itemID={itemId} />
            <CreatCategory isOpenModal={isCategoryOpenModal} setIsOpenModal={setIsCategoryOpenModal} itemID={itemId} />
        </>

    )
}

export default ResturantItems