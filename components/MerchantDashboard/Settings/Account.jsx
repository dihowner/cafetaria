import React, { useRef, useState, useEffect } from 'react'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { FaPhoneSquare, FaRegUser } from "react-icons/fa";
import CustomButton from '@/components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import EditInput from '@/components/EditInput';
import TypeOfVendor from './Business/TypeOfVendor';
import Map from '@/components/Map';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
const Account = () => {
    const { Details } = useSelector((state) => state.rootReducers)
    const router = useRouter()
    const [selectedImage, setSelectedImage] = useState();
    const [store_image, setStore_image] = useState()
    const { auth } = useSelector((state) => state.rootReducers);
    const [editMode, setEditMode] = useState(false);
    const handleEditClick = () => {
        setEditMode(true);
    };
    const handleCancelClick = () => {
        setEditMode(false);
    };
    const details = Details?.Details?.vendor
    const fileInputRef = useRef(null)
    const phoneRef = useRef(null)
    const storeNameRef = useRef(null)
    const NameRef = useRef(null)
    const [vendordetails, { isLoading }] = useVendordetailsMutation()
    const dispatch = useDispatch()
    const handleFileInputChange = (event) => {
        const file = fileInputRef?.current?.files[0]
        setStore_image(file)
        if (file) {
            const maxSize = 10 * 1024 * 1024; // 10 MB in bytes
            if (file.size > maxSize) {
                // Display toast for exceeding file size limit
                toast.error('File size exceeds the limit of 10 MB. Please choose a smaller file.');
                return;
            }
            const dataUrl = URL.createObjectURL(file);

            const fileFormat = file.type.split('/')[1];
            if (['png', 'jpeg', 'jpg'].includes(fileFormat)) {
                setSelectedImage(dataUrl);

            } else {
                // Display toast for invalid file format
                toast.error('Invalid file format. Please select a PNG, JPEG, or JPG file.');
            }
        }
        // console.log(file)
    };
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const [isPhysicalStore, setisPhysicalStore] = useState(Details?.Details?.isPhysicalStore)
    const fetchDetails = async () => {
        try {
            const response = await vendordetails(auth?.token).unwrap()
            dispatch(setDetails(response))
        } catch (err) {
            // console.log(err)
            // toast.error(err?.data?.message + ' ' + 'Please Login Again' || err.error)
            if (err.status === 401) {
                dispatch(logout())
                toast.error(err?.data?.message + ' ' + 'Please Login Again')
                router.push('/vendor/login')
            } else {
                toast.error(err.error)
            }
        }
    }
    const edit = async (e) => {
        e.preventDefault()
        const fileimage = store_image === undefined || store_image === null ? Details?.Details?.store_image : store_image
        const formData = new FormData()
        formData.append('mobile_number', phoneRef?.current?.value)
        formData.append('storeImage', fileimage) // A ssuming mealImage is a File object
        formData.append('name', NameRef?.current?.value)
        formData.append('store_name', storeNameRef?.current?.value)
        formData.append('isPhysicalStore', isPhysicalStore)
        await axios.put('https://cafeteria-ekep.onrender.com/api/user/profile/update', formData, {
            headers: {
                'Content-Type': 'multipart/formData',
                Accept: 'Application/json',
                Authorization: `Bearer ${auth.token}`,
            },
        })

            .then(response => {
                console.log('Success:', response.data);
                dispatch(setDetails(response.data))
                fetchDetails()
                toast.success('profile updated succesfully')
                handleCancelClick()
                // You can handle the response from the backend here if needed
            })
            .catch((err) => {
                // setLoading(false)
                toast.error(err?.response?.data?.message || err.error);
                fetchDetails()
                // console.error(error)
            })

        // console.log(phoneRef?.current?.value, fileimage, NameRef?.current?.value, storeNameRef?.current?.value, isPhysicalStore,isPhysicalStoreRef?.current?.value)
    }
    return (
        <div className='flex flex-col gap-y-4 border p-6'>
            <h1 className='font-semibold text-lg'>Account information</h1>
            <p className='text-[#00000066] text-sm'>These are your public information, be careful what u share</p>
            <form onSubmit={edit} action="" className='flex flex-col gap-y-16'>
                <div className="flex flex-col gap-y-3 w-full">
                    <div className=' flex flex-col w-full text-sm'>
                        <label htmlFor="name">{'Email Address'}</label>
                        <div className="flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] relative ">
                            <input type={'text'}
                                defaultValue={Details?.Details?.user?.email} className='w-full outline-none border-none bg-transparent' disabled
                            />
                        </div>
                    </div>
                    <EditInput title='Store name'
                        reff={storeNameRef}
                        defaultValue={Details?.Details?.store_name}
                        Icon={<FaRegUser />}
                        disabled={!editMode} />
                    <EditInput title='Name'
                        reff={NameRef}
                        defaultValue={Details?.Details?.user?.name}
                        Icon={<FaRegUser />}
                        disabled={!editMode} />
                    <EditInput title='Phone Number'
                        reff={phoneRef}
                        defaultValue={Details?.Details?.user?.mobile_number
                        }
                        type={'tel'}
                        Icon={<FaPhoneSquare />}
                        disabled={!editMode} />
                    <div className=' flex md:justify-end w-[80%]'>
                        <div className='flex gap-x-6 border w-full py-4 px-4'>
                            <div className='w-24 h-24'>
                                {selectedImage !== null && selectedImage !== undefined ? (<>
                                    <img src={selectedImage} alt="Selected" className="w-full h-full object-contain" /></>) : (
                                    <>
                                        {Details?.Details?.store_image === null || Details?.Details?.store_image === undefined ? <img
                                            src='/Images/Rectangle 86.png'
                                            alt='store image'
                                            className='w-full h-full'
                                        /> :
                                            <img
                                                src={Details?.Details?.store_image}
                                                alt='store image'
                                                className='w-full h-full'
                                            />
                                        }
                                    </>
                                )}



                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <h6>Store picture</h6>
                                <div className='flex gap-x-4 '>

                                    <Button

                                        component="label"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#218B07',
                                            color: '#ffffff',
                                            fontSize: '.8rem',
                                            padding: '.5rem',
                                            width: '150px',
                                            '&:hover': {
                                                backgroundColor: '#218B07',
                                            },
                                        }}
                                    >
                                        change Image
                                        <VisuallyHiddenInput
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".png, .jpg, .jpeg"
                                            onChange={handleFileInputChange}
                                        />
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <TypeOfVendor value={isPhysicalStore} setisPhysicalStore={setisPhysicalStore} />
                    {isPhysicalStore === true ? <Map />:null}
                </div>
                <div className="w-full flex items-center gap-x-4">
                    {!editMode ? (
                        <div
                            className='bg-[#218B07] text-white flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4 w-1/2 text-sm'
                            onClick={handleEditClick}
                        >Edit</div>
                    ) : (
                        <>
                            <CustomButton
                                title={'Save'}
                                containerStyles='bg-[#218B07] text-white flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4 w-1/2 text-sm'
                                type='submit'
                            // handleClick={() => edit()}
                            />
                            <CustomButton
                                title='Cancel'
                                containerStyles='border text-black border-black flex justify-center items-center py-2 px-8 rounded-[5px] gap-x-4 w-1/2 text-sm'
                                type='button'
                                handleClick={handleCancelClick}
                            />
                        </>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Account



{/* <div className="flex flex-col gap-y-2">
                        <label htmlFor="" className='font-bold'>Business description</label>
                        <div className="bg-[#F5F5F5]  w-[100%] sm:w-[70%] md:w-[70%] rounded-xl py-2 px-2 ">
                            <textarea name="" id="" cols="30" rows="8" className='w-full bg-transparent outline-none border-0' placeholder='A short description of your business'></textarea>

                        </div>
                    </div> */}