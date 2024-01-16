
import React, { useRef, useState } from 'react';
import { IoMdImages } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Upload = ({ mealImage }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0]
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
                mealImage(file)
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
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected" className="w-full h-full object-contain" />
                ) : (
                    <label htmlFor="fileInput" className="text-center flex flex-col justify-center items-center">
                        <IoMdImages className="text-2xl" />
                        <span className='text-[#218B07] text-sm'>Upload your Meal Image </span>
                    </label>
                )}
            </div>

            <Button
                startIcon={<CloudUploadIcon />}
                // onClick={handleButtonClick}
                sx={{
                    backgroundColor: '#218B07',
                    color: '#ffffff',
                    fontSize: '.8rem',
                    padding: '.5rem',
                    width:'150px',
                    '&:hover': {
                        backgroundColor: '#218B07',
                    },
                }}
            >
                Upload file
                <VisuallyHiddenInput
                    // ref={fileInputRef}
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleFileInputChange}
                />
            </Button>

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