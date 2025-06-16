// This component renders "run" and "pick a different video" buttons

// Parent -> SideBar
// children -> n/a

import { Button, Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {useEffect, useState} from 'react'

export default function VideoActions(){
    // submit button loading - gotten from MUI Button Documentation
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });

    useEffect(() => {
        
    })

    return (
        <Paper elevation={4} sx={{m: 2, p: 2}}>
            <Button onClick={() => setLoading(true)} loading={loading} variant="contained" color="secondary" sx={{width: 1, my: 1}}>Process Video</Button>
            <Button variant="outlined" color="secondary" href="/videos" sx={{width: 1, my: 1}}>Back to Videos</Button>
        </Paper>
        
    )
}