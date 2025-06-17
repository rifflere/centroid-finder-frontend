'use client'
import React, { useContext } from 'react';
import { Typography, Paper, Button } from "@mui/material";
import { SettingsContext } from "@/context/SettingsContext";
import { useParams } from 'next/navigation';

export default function PreviewPage({children, params}){
    // Get filename from context or fallback to route param
    const { filename: contextFilename } = useContext(SettingsContext);
    const { filename: paramFilename } = useParams();

    const filename = contextFilename || paramFilename;
    
    if (!filename){
        return <p>Loading...</p>;
    }    

    // Remove ".mp4" to get the CSV base name
    const csvFilename = filename.replace(/\.mp4$/, '');

    return (
        <Paper elevation={4} sx={{m: 2, p: 2}}>
            <Typography variant='Title' component='h1'>Finished Processing: </Typography>
            <Typography variant='body2' component='p' color='primary'>{filename}</Typography>
            {/* Add a link to the csv file on the user's pc */}
            <Button variant="contained" color="secondary" target="_blank" href={`http://localhost:3000/results/${csvFilename}.csv`} sx={{width: 1, my: 1}}>Download Results</Button>
            <Button variant="outlined" color="secondary" href="/videos" sx={{width: 1, my: 1}}>Back to Videos</Button>
        </Paper>
    )

}