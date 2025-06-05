'use client';
import OriginalFrame from "@/components/OriginalFrame";
import VideoPreview from "@/components/VideoPreview";

export default function PreviewPage({children}){
    //const { filename } = params; // should this be props?
    
    return (
        <div style={{ border: '2px solid', borderColor: 'gold', backgroundColor: 'yellow' }}>
            {/* Commenting Out For Testing Purposes */}
            {/* <h1>Previewing: {filename}</h1> */}
            <p>This page will show a video frame preview in the future.</p>

            <OriginalFrame />
            <VideoPreview />

            <a href="/videos">Back to Videos</a>
        </div>
    );
}