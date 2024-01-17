import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import EditGroceriesCategory from './EditGroceriesCategory';
import DeleteGroceriesCategory from './DeleteGroceriesCategory';
const GroceriesCategoryList = () => {
    const { getcategory, getCategoryLoading } = groceriesFetch()
    const { GroceriesCategory } = useSelector((state) => state.rootReducers)
    useEffect(() => {
        getcategory()
    }, [])
    const categories = GroceriesCategory?.category
    const handleClick = (item) => {


        console.info(`You clicked ${'22222'}`);
    };
    const [open, setOpen] = React.useState(categories ? Array(categories?.length).fill(false) : []);
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
    const [itemId, setItemId] = useState()
    const [isOpenEditModal, setIsEditOpenModal] = useState(false)
    const openEditModal = () => {
        setIsEditOpenModal(true)
    }
    const [isOpenDeleteModal, setIsDeleteOpenModal] = useState(false)
    const openDeleteModal = () => {
        setIsDeleteOpenModal(true)
    }
    return (
        <div className='flex flex-col justify-cente items-center gap-x-3 6 p-4'>
            <h1 className='text-lg text-[#218B07] font-semibold'>Mart Category</h1>
            <div className='overflow-x-auto w-[100%]'>
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
                                        Name
                                    </td>
                                    <td
                                        scope='col'
                                        className='text-sm  text-[#5f8357] px-1 py-1 font-bold whitespace-nowrap text-center'
                                    >
                                        Action
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {categories && categories?.map((item, index) => (
                                    <tr className='border-b capitalize p-2' key={index}>
                                        <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-center'>
                                            {index + 1}
                                        </td>
                                        <td className='px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-center'>
                                            {item.name}
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
                                                    size="small">Add items</Button>
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
                                                        >
                                                            <Paper >
                                                                <ClickAwayListener onClickAway={handleClose}>
                                                                    <MenuList id="split-button-menu" autoFocusItem>
                                                                        <MenuItem onClick={() => {
                                                                            openEditModal()

                                                                            setItemId(item)
                                                                        }} >
                                                                            <div className='1 flex gap-x-2 text-sm items-center text-[#218B07]'>
                                                                                <p>Edit</p>
                                                                            </div>

                                                                        </MenuItem>
                                                                        <MenuItem>
                                                                            <div className=' flex gap-x-2 text-sm items-center text-[#218B07]'>
                                                                                <p>View Items</p>
                                                                            </div>
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            onClick={() => { openDeleteModal(); setItemId(item) }}
                                                                        >
                                                                            <div className=' flex gap-x-2 text-sm items-center text-[#218B07]'>
                                                                                <p>Delete</p>
                                                                            </div>
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
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
                <EditGroceriesCategory isOpenModal={isOpenEditModal} setIsOpenModal={setIsEditOpenModal} itemID={itemId} />
                <DeleteGroceriesCategory isOpenModal={isOpenDeleteModal} setIsOpenModal={setIsDeleteOpenModal} itemID={itemId} />
            </div>

        </div>
    )
}

export default GroceriesCategoryList