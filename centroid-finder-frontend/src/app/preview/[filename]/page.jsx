'use client';
import OriginalFrame from "@/components/OriginalFrame";
import VideoPreview from "@/components/VideoPreview";

export default function PreviewPage({children}){
    const { filename } = params;
    
    return (
        <div style={{ border: '2px solid', borderColor: 'gold' }}>
            <h1>Previewing: {filename}</h1>
            <p>This page will show a video frame preview in the future.</p>

            <OriginalFrame />
            <VideoPreview />
        </div>
    );
}