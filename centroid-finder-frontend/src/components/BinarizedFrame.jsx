// This component renders the binarized frame

// Parent -> BinarizedFrameContainer
// children -> n/a

import { ImageList, ImageListItem, Typography, Paper } from "@mui/material"

export default function BinarizedFrame({}){
    return (
        <Paper square color="primary" elevation={1} sx={{m: 2, p: 2}}>
            <ImageList  cols={1} rowHeight={450}>
                <ImageListItem>
                    {/* TODO: Logic for Binarized Frame? This is where it is rendered at least */}
                </ImageListItem>
            </ImageList>
            <Typography variant="caption">Binarized Frame</Typography>
        </Paper>
    )
}