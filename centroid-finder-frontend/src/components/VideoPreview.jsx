// Logical Component
// Children: Original Frame, Binarized Frame

import OriginalFrame from "./OriginalFrame"
import { Button, Grid, List, ListItem, Typography, Box } from '@mui/material';
import BinarizedFrameContainer from "./BinarizedFrameContainer";

export default function VideoPreview({filename}) {
    // need to display the name of the video chosen somewhere -- params?

    return(
        <Box style={{ margin:2}}>
            <Typography variant="h3" component="h1">Video Preview</Typography>
            <Typography variant="h4" component="h2">Video Chosen: </Typography>
            <Typography variant="subtitle1" color='secondary'>{filename}</Typography>
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid size={6}>
                    <OriginalFrame filename={filename}/>
                </Grid>
                <Grid size={6}>
                    <BinarizedFrameContainer originalfilename={filename}/>
                </Grid>
            </Grid>
        </Box>
    )
}