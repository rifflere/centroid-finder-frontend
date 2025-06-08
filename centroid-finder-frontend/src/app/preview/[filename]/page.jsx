'use client';
import VideoPreview from "@/components/VideoPreview";
import SideBar from "@/components/SideBar";
import { Button } from "@mui/material";
import { useState } from 'react';

export default function PreviewPage({children}){
    //const { filename } = params; // should this be props?

    // set states
    const { threshold, setThreshold } = useState()
    const { color, setColor } = useState();

    async function postVideo() {
        // post data with ...
            // filename
            // color
            // threshold
    }
    
    return (
        <div style={{ border: '2px solid', borderColor: 'gold', backgroundColor: 'lightcyan' }}>
            {/* Commenting Out For Testing Purposes */}
            {/* <h1>Previewing: {filename}</h1> */}
            <p>This page will show a video frame preview in the future.</p>

            <VideoPreview />
            <SideBar />

            <Button variant="contained" color="primary" onClick="postVideo">Process Video</Button>

        </div>
    );
}