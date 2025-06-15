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
                const data = await response.json();
                console.log(data);

                setThumbnail(data);
    
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            };
    
            fetchData();
        }, [])


    //console.log(thumbnail)

    return(
        <div style={{ backgroundColor: 'lightblue', margin: '5px', padding: '5px'}}>
            <h2>Original Frame</h2>
            <p>This component will eventually render the original frame.</p>
            <img src={thumbnail}></img>
        </div>
    )
}