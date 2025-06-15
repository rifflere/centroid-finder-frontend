// Presentational Component
// Parent: Video Preview

import { useState, useEffect } from 'react';

export default function OriginalFrame({filename}) {

    const [thumbnail, setThumbnail] = useState();

    // TODO: access filename from context
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/thumbnail/${filename}`);
                    
                    // Check if the response is OK
                    if (!response.ok) {
                        throw new Error('Failed to fetch thumbnail');
                    }

                    // Convert the response to a Blob
                    const imageBlob = await response.blob();

                    // Create an object URL from the Blob to use as a source for the <img> element
                    const imageUrl = URL.createObjectURL(imageBlob);
                    
                    // Set the thumbnail state with the object URL
                    setThumbnail(imageUrl);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }, [filename]);


    if (!thumbnail) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ backgroundColor: 'lightblue', margin: '5px', padding: '5px' }}>
            <h2>Original Frame</h2>
            <p>This component will eventually render the original frame.</p>
            <img src={thumbnail} alt="Original Frame" />
        </div>
    );

}