
import React, { useRef, useState } from 'react';
import { IoMdImages } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Upload = ({ reff, defaultValue, setStore_image }) => {
    const [selectedImage, setSelectedImage] = useState();
    // const handleFileInputChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         // Your file input handling logic...
    //     }
    // };
    // console.log(defaultValue)
    const handleFileInputChange = (event) => {
        const file = event.target.files[0]
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
    return (
        <div className="flex flex-col gap-y-6 justify-center border w-full h-full p-6">
            <div className="w-full flex justify-center items-center h-[200px]">
                {selectedImage !== null && selectedImage !== undefined ? (
                    <img src={selectedImage} alt="Selected" className="w-full h-full object-contain" />
                ) : (
                    // <label htmlFor="fileInput" className="text-center">
                    //     <IoMdImages className="text-9xl" />
                    //     <span className='text-[#218B07] text-xl'>Upload your Meal Image </span>
                    // </label>
                    <img src={defaultValue} alt="default value" className="w-full h-full object-contain" />
                )}
            </div>
            <form className="w-full">
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    // onClick={handleButtonClick}
                    sx={{
                        backgroundColor: '#218B07',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#218B07',
                        },
                    }}
                >
                    Upload file
                    <VisuallyHiddenInput
                        ref={reff}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleFileInputChange}
                    />
                </Button>
            </form>
        </div>
    );
};

export default Upload;

// const [selectedImage, setSelectedImage] = useState(null);
// // const fileInputRef = useRef(null);
// // const handleFileInputChange = (event) => {
// //     fileInputRef.current.click();
// //     const file = event.target.files[0];

// //     if (file) {
// //         const reader = new FileReader();
// //         reader.onload = (e) => {
// //             setSelectedImage(e.target.result);
// //         };
// //         reader.readAsDataURL(file);
// //     }
// // };

// const handleButtonClick = () => {
//     fileInputRef.current.click();
// };