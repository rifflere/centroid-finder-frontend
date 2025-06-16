// Logical Component
// Children: Original Frame, Binarized Frame

import OriginalFrame from "./OriginalFrame"
import { Button, Grid, List, ListItem, Typography, Box } from '@mui/material';
import BinarizedFrameContainer from "./BinarizedFrameContainer";
import { useState, useEffect } from 'react';

export default function VideoPreview({filename}) {
    // need to display the name of the video chosen somewhere -- params?

    const [thumbnail, setThumbnail] = useState();

    // TODO: access filename from context
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/thumbnail/${filename}`);
                
                // Check if the response is OK
                if (!response.ok) {
                    throw new Error('Failed to fetch thumbnail');
                }

                // Convert the response to a Blob
                const imageBlob = await response.blob();

                // Create an object URL from the Blob to use as a source for the <img> element
                const imageUrl = URL.createObjectURL(imageBlob);
                
                // Set the thumbnail state with the object URL
                setThumbnail(imageUrl);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [filename]);


    if (!thumbnail) {
        return <p>Loading...</p>;
    }

    return(
        <Box style={{ margin:2}}>{/* 
            <Typography variant="h3" component="h1">Video Preview</Typography>
            <Typography variant="h4" component="h2">Video Chosen: </Typography> */}
            
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid size={6}>
                    <OriginalFrame imgURL={thumbnail} filename={filename}/>
                </Grid>
                <Grid size={6}>
                    <BinarizedFrameContainer imgURL={thumbnail} filename={filename}/>
                </Grid>
            </Grid>
        </Box>
    )
}