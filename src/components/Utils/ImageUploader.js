import { Button } from '@mui/material';
import React, { useRef } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const ImageUploader = ({ changeImage }) => {
    const fileInput = useRef();

    return (
        <>
            <Button
                fullWidth
                id="profileImage"
                name="profileImage"
                variant="contained"
                startIcon={
                    <AddAPhotoIcon sx={{ transform: 'translateY(-2px)' }} />
                }
                onClick={() => fileInput.current.click()}
            >
                Upload image
            </Button>
            <input
                type="file"
                name="image"
                accept="image/*"
                ref={fileInput}
                style={{ display: 'none' }}
                onChange={changeImage}
            />
        </>
    );
};

export default ImageUploader;
