
import React, { useRef, useState } from 'react';
import { IoMdImages } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Upload = ({ onImageUpload }) => {

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
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
                onImageUpload(file); // Pass the selected file to the parent component
            };
            reader.readAsDataURL(file);
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
                    <label htmlFor="fileInput" className="text-center">
                        <IoMdImages className="text-9xl" />
                        <span className='text-[#218B07] text-xl'>Upload your Meal Image </span>
                    </label>
                )}
            </div>
            <div className="w-1/2">
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
                        // ref={fileInputRef}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleFileInputChange} 
                    />
                </Button>
            </div>
        </div>
    );
};

export default Upload;

