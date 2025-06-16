// This component renders the sidebar 
// Parent -> main
// children -> VideoSettings, VideoActions

import VideoSettings from "./VideoSettings";
import VideoActions from "./VideoActions";
import { Paper } from '@mui/material'

export default function SideBar(){
    return (
        <div>
            <VideoSettings />
            <VideoActions />
        </div>
        
    )
}