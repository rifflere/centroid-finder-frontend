'use client';
import VideoPreview from "@/components/VideoPreview";
import SideBar from "@/components/SideBar";
import { Button } from "@mui/material";
import { useState, createContext } from 'react';

export default function PreviewPage({children}){
    // const { filename } = params; // should this be props?
    // console.log("PARAMETER FILENAME: " + params.filename)

    // TODO: Use context to send and get data from videosettings
    // // Create context 
    // const SettingsContext = createContext(undefined);

    // // create context wrapper
    // const SettingsProvider = ({ children }) => {
    // // set states - default threshold 0, default color black
    // // const filename = params.filename
    // const { threshold, setThreshold } = useState(0)
    // const { color, setColor } = useState("#ffffff");
    // }


    async function postVideo() {
        // post data with ...
            // filename
            // color
            // threshold
    }
    
    return (
        <div style={{ border: '2px solid', borderColor: 'gold', backgroundColor: 'lightcyan' }}>
            {/* <SettingsContext.Provider value={ {filename, color, threshold} }> */}
                {/* Commenting Out For Testing Purposes */}
                {/* <h1>Previewing: {filename}</h1> */}
                <p>This page will show a video frame preview in the future.</p>

                <VideoPreview />
                <SideBar />

                <Button variant="contained" color="primary">Process Video</Button>
            {/* </SettingsContext.Provider> */}
        </div>
    );
}