// This component renders "run" and "pick a different video" buttons

// Parent -> SideBar
// children -> n/a

import { Button, Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useContext, useEffect, useState} from 'react'
import { SettingsContext } from "@/context/SettingsContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function VideoActions(){
    // get filename, color, and threshold states fron the Settings Context
    const { filename, color, threshold } = useContext(SettingsContext);
    console.log("Video Actions filename,color,threshold: ", filename, color, threshold);

    // encode color and threshold formats for POST request URL
    const encodedColor = encodeURIComponent(color);
    const encodedThreshold = encodeURIComponent(threshold);

    // submit button loading state - from MUI Button Documentation
    const [loading, setLoading] = React.useState(false);

      // Handle Process Click
    const handleProcess = async () => {
    // Error for empty inputs
        if (!filename || !color || !threshold) {
        alert("Please enter a color and threshold!");
        return;
        }

    setLoading(true);

    // try catch
    try {
        console.log("Sending URL:", `http://localhost:3000/process/${filename}?targetColor=${encodedColor}&threshold=${encodedThreshold}`);

        // POST to api with filename, color, and threshold
        const response = await fetch(
            `http://localhost:3000/process/${filename}?targetColor=${encodedColor}&threshold=${encodedThreshold}`,
            { method: 'POST' }
        );

      if (!response.ok) {
        throw new Error("Processing failed!");
      }

      // Redirect to results
      window.location.href = `/result/${filename}`;

    } catch (error) {
      console.error(error);
      alert("An error occurred while processing the video.");
    } finally {
        // update loading state
        setLoading(false);
    }
  };

    // React.useEffect(() => {
    //     const timeout = setTimeout(() => {
    //     setLoading(false);
    //     }, 2000);
    //     return () => clearTimeout(timeout);
    // });

    // useEffect(() => {
        
    // })

    return (
        <Paper elevation={4} sx={{m: 2, p: 2}}>
            <Button
        onClick={handleProcess}
        disabled={loading}
        variant="contained"
        color="secondary"
        sx={{ width: 1, my: 1 }}
        // TODO: figure out why this loading bar isn't showing up
        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
      >
        {loading ? "Processing..." : "Process Video"}
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        href="/videos"
        sx={{ width: 1, my: 1 }}
      >
        Back to Videos
      </Button>
        </Paper>
        
    )
}