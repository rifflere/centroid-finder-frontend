// Presentational Component
// Parent: Video Preview

import { useState, useEffect } from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';

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
        <div style={{ backgroundColor: 'lightblue', margin: '5px', padding: "10px" }}>
            
            <ImageList  cols={1} rowHeight={450}>
                <ImageListItem>
                    <img src={thumbnail} alt="Original Frame" />
                </ImageListItem>
            </ImageList>
            <Typography variant="caption">Original Frame</Typography>
            
        </div>
    );

}