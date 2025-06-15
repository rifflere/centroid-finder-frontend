'use client';
import React from 'react';
import VideoPreview from "@/components/VideoPreview";
import SideBar from "@/components/SideBar";
import { Grid, Box, Button } from "@mui/material";
import { useState, createContext } from 'react';

export default function PreviewPage({children, params}){
    const { filename } = React.use(params, null); // should this be props?

    if (!filename){
        return <p>Loading...</p>;
    }

    console.log("PARAMETER FILENAME: " + filename)

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
                <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                    
                    {/* The left side of the grid has the original frame and the binarized frame */}
                    <Grid size={5} sx={{padding:2}}>
                        {/* <h1>Previewing: {filename}</h1> */}
                        <p>This page will show a video frame preview in the future.</p>
                        <VideoPreview filename={filename}/>
                    </Grid>

                    {/* The right side of the grid has sidebar tools that adjust the settings and the process video button */}
                    <Grid size={7} sx={{padding:2}}>
                        <SideBar />
                        <br/>
                        <Button variant="contained" color="primary">Process Video</Button>
                    </Grid>
 
                </Grid>
            {/* </SettingsContext.Provider> */}
        </div>
    );
}