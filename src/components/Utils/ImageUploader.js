import { Button } from "@mui/material";
import React, { Component } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    render() {
        return(
            <>
                <Button
                    fullWidth
                    id="profileImage"
                    name="profileImage"
                    variant="contained"
                    startIcon={<AddAPhotoIcon sx={{ transform: 'translateY(-2px)' }} />}
                    onClick={() => this.fileInput.current.click()}
                >
                    Upload image
                </Button>
                <input 
                    type="file" 
                    name="image"
                    accept="image/*" 
                    ref={this.fileInput} 
                    style={{ display: 'none' }}
                    onChange={this.props.changeImage}
                />
            </>
        );
    }
}

export default ImageUploader;
