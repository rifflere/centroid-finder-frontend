// Logical Component
// Children: Original Frame, Binarized Frame

import OriginalFrame from "./OriginalFrame"
import BinarizedFrame from "./BinarizedFrame"

export default function VideoPreview() {
    // need to display the name of the video chosen somewhere -- params?

    return(
        <div style={{ backgroundColor: 'lightcoral', margin: '5px', padding: '5px'}}>
            <h2>Video Preview</h2>
            <h3>Video Chosen: </h3>
            <p>This component will be used to display the analyzed video output or processed frame preview</p>

            <OriginalFrame />
            <BinarizedFrame />
        </div>
    )
}