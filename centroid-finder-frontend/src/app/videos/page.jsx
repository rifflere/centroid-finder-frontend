'use client';
import Video from '@/components/Video';
import { Button, List, ListItem, Typography, Box } from '@mui/material';
import { useEffect } from 'react';

export default function VideoChooserPage({children}){
    
    // Temporary Data until we get an api route to paste here or whatever we use to retrieve data from Docker
    const sampleVideoData = ['video1.mp4', 'video2.mp4', 'video3.mp4'];

    // could maybe do a useEffect call to get videos on page load instead

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/videos');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [])


    // async function getVideos() {
    //     const res = await fetch("http://localhost:3000/api/videos");
    //     const data = await res.json();
        
    //     console.log(data);
    //     return data;
    // }

    // const videosJSON = getVideos();
    
    return (
        <Box sx={{ padding:2 }}>
            <Typography variant="h4" component="h1">Select a video</Typography>
            <Typography variant="body1" component="body1">Listed below are the videos available for processing.</Typography>
            <List disablePadding="true">
                {sampleVideoData.map((filename, index) => (
                    <ListItem>
                        <Button key={index} variant="outlined" href={`/preview/${filename}`}>{filename}</Button>
                    </ListItem>
                    
                ))}
            </List>    
        </Box>
    );
}