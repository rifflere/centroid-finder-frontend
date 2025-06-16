// Presentational Component
// Parent: Video Preview


import { ImageList, ImageListItem, Typography, Paper } from '@mui/material';

export default function OriginalFrame({imgURL, filename}) {

    

    return (
        <Paper square elevation={1} sx={{m: 2, p: 2}}>
            
            <ImageList  cols={1} rowHeight={450}>
                <ImageListItem>
                    <img src={imgURL} alt="Original Frame" />
                </ImageListItem>
            </ImageList>
            <Typography variant="caption">{filename}</Typography>
            
        </Paper>
    );

}