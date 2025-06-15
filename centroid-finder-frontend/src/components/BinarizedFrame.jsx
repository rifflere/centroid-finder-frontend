// This component renders the binarized frame

// Parent -> BinarizedFrameContainer
// children -> n/a

import { ImageList, ImageListItem, Typography } from "@mui/material"

export default function BinarizedFrame({}){
    return (
        <div style={{ backgroundColor: 'black', color:'lightblue', margin: '5px', padding: '10px'}}>
            <ImageList  cols={1} rowHeight={450}>
                <ImageListItem>
                    {/* TODO: Logic for Binarized Frame? This is where it is rendered at least */}
                </ImageListItem>
            </ImageList>
            <Typography variant="caption">Binarized Frame</Typography>
        </div>
    )
}