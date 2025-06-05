// Logical Component
// Children: Original Frame, Binarized Frame

import OriginalFrame from "./OriginalFrame"
import BinarizedFrame from "./BinarizedFrame"
import { Button, List, ListItem, Typography, Box } from '@mui/material';

export default function VideoPreview() {
    // need to display the name of the video chosen somewhere -- params?

    return(
        <Box style={{ margin:2}}>
            <Typography variant="h4" component="h1">Video Preview</Typography>
            <h3>Video Chosen: </h3>
            <p>This component will be used to display the analyzed video output or processed frame preview</p>

            <OriginalFrame />
            <BinarizedFrame />
        </Box>
    )
}