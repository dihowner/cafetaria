
import React, { useRef, useState } from 'react';
import { IoMdImages } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Upload = () => {

    const [selectedImage, setSelectedImage] = useState(null);


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
        <div className="flex flex-col gap-y-6 justify-center border w-full h-full">
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

                    sx={{
                        backgroundColor: '#218B07',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#218B07', // Set hover color explicitly
                        },
                    }}
                >
                    Upload file
                    <VisuallyHiddenInput
                        type="file"
                        accept=".png, .jpg, .jpeg"

                    />
                </Button>
            </div>
        </div>
    );
};

export default Upload;

