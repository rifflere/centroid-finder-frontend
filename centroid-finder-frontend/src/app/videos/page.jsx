'use client';
import Video from '@/components/Video';
import { Button, List, ListItem, Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function VideoChooserPage({children}){
    
    // Temporary Data until we get an api route to paste here or whatever we use to retrieve data from Docker
    const sampleVideoData = ['video1.mp4', 'video2.mp4', 'video3.mp4'];

    // could maybe do a useEffect call to get videos on page load instead

    // TODO: Use the following use effect to generate list of videos on page
    const [myVideos, setMyVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/videos');
            const data = await response.json();
            console.log(data);

            setMyVideos(data.map(video => video.video));

            console.log("My videos: ",myVideos)
            console.log("Sample videos: ", sampleVideoData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [])

    // add selected video to state
    // TODO: Add this to the context?
    const { video, setVideo } = useState();


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
                {/* {sampleVideoData.map((filename, index) => (
                    <ListItem>
                        <Button key={index} variant="outlined" href={`/preview/${filename}`}>{filename}</Button>
                    </ListItem>
                    
                ))}

                {myVideos.map((filename, index) => (
                    <p>video</p>
                ))}
 */}

                {myVideos.length > 0 ? (
                    myVideos.map((filename, index) => (
                        <ListItem key={index}>
                            <Button variant="outlined" href={`/preview/${filename}`}>{filename}</Button>
                        </ListItem>
                    ))
                ) : (
                    <Typography variant='caption' color='secondary'>Loading Videos...</Typography>
                )}

            </List>    
        </Box>
    );
}