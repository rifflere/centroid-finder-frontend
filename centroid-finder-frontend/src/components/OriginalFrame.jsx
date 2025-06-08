// Presentational Component
// Parent: Video Preview

export default function OriginalFrame() {

    // TODO: access filename from context

    async function getThumbnail() {
        // TODO: This fetch route is currently hardcoded, should be updated to include filename from context
        const res = await fetch("http://localhost:3000/thumbnail/ensantina.mp4");
        // TODO: Make sure the thumbnail API route is working
        const data = await res.json();
        
        console.log(data);
        return data;
    }

    const videoThumbnail = getThumbnail();

    return(
        <div style={{ backgroundColor: 'lightblue', margin: '5px', padding: '5px'}}>
            <h2>Original Frame</h2>
            <p>This component will eventually render the original frame.</p>
        </div>
    )
}