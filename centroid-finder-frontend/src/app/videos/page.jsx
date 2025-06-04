'use client';
import Link from 'next/link';

export default function VideoChooserPage({children}){
    
    // Temporary Data until we get an api route to paste here or whatever we use to retrieve data from Docker
    const sampleVideoData = ['video1.mp4', 'video2.mp4', 'video3.mp4'];

    async function getVideos() {
        const res = await fetch("http://localhost:3000/api/videos");
        const data = await res.json();
        
        console.log(data);
        return data;
    }

    const videosJSON = getVideos();
    
    return (
        <div style={{ border: '2px solid', borderColor: 'gold' }}>
            <h1>Choose a video: </h1>
            <p>This page will show the list of videos..</p>
            <ul>
                {sampleVideoData.map((filename) => (
                    <li key={filename}>
                        <Link href={`/preview/${filename}`}>{filename}</Link> 
                    </li>
                ))}
            </ul>
        </div>
    );
}