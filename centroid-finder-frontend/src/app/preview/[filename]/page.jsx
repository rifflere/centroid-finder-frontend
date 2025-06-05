'use client';
import VideoPreview from "@/components/VideoPreview";
import SideBar from "@/components/SideBar";

export default function PreviewPage({children}){
    //const { filename } = params; // should this be props?
    
    return (
        <div style={{ border: '2px solid', borderColor: 'gold', backgroundColor: 'lightcyan' }}>
            {/* Commenting Out For Testing Purposes */}
            {/* <h1>Previewing: {filename}</h1> */}
            <p>This page will show a video frame preview in the future.</p>

            <VideoPreview />
            <SideBar />


            
        </div>
    );
}