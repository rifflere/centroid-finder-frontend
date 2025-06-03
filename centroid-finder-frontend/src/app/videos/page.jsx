export default function Page({children}){
    async function getVideos() {
        const res = await fetch("http://localhost:3000/api/videos");
        const data = await res.json();
        
        videoList = data;
        console.log(videoList);
        return data;
    }

    const videoList = getVideos();

    return (
    <div style={{ border: '2px solid', borderColor: 'gold' }}>
        <h1>Videos Page</h1>
        <ul>
            // TODO: Render videos here
        </ul>
        <p> List of videos above </p>
    </div>);
}