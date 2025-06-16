'use client'
import React from 'react';

import { Typography, Paper, Button } from "@mui/material";


export default function PreviewPage({children, params}){
    const { filename } = React.use(params, null); 
    
    if (!filename){
        return <p>Loading...</p>;
    }    

    return (
        <Paper elevation={4} sx={{m: 2, p: 2}}>
            <Typography variant='h1'>Processing Complete</Typography>
            <p>{filename}</p>
            {/* Add a link to the csv file on the user's pc */}
            <Button variant="contained" color="secondary" href="" sx={{width: 1, my: 1}}>Open CSV Results</Button>
            <Button variant="outlined" color="secondary" href="/videos" sx={{width: 1, my: 1}}>Back to Videos</Button>
        </Paper>
    )

}