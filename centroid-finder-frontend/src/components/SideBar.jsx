// This component renders the sidebar 
// Parent -> main
// children -> VideoSettings, VideoActions

import VideoSettings from "./VideoSettings";
import VideoActions from "./VideoActions";

export default function SideBar(){
    return (
        <div style={{ backgroundColor: "lightgreen", margin: "5px", padding: "5px"}}>
            <h2>SideBar Component <bold>Pending...</bold></h2>
            <VideoSettings />
            <VideoActions />
        </div>
        
    )
}