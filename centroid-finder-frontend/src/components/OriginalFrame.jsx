// Presentational Component
// Parent: Video Preview


import { ImageList, ImageListItem, Typography } from '@mui/material';

export default function OriginalFrame({imgURL}) {

    

    return (
        <div style={{ backgroundColor: 'lightblue', margin: '5px', padding: "10px" }}>
            
            <ImageList  cols={1} rowHeight={450}>
                <ImageListItem>
                    <img src={imgURL} alt="Original Frame" />
                </ImageListItem>
            </ImageList>
            <Typography variant="caption">Original Frame</Typography>
            
        </div>
    );

}