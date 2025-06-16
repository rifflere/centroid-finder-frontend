// This component renders the binarized frame

// Parent -> VideoPreview
// children -> BinarizedFrame

import { useEffect } from "react";
import BinarizedFrame from "./BinarizedFrame"

export default function BinarizedFrameContainer({originalfilename}){
    // TODO: Logic for Binarized frame
    // color
    // threshold
    // image

    // testing sample vid (baby in yellow raincoat)
    let color = "#EAC659";
    const threshold = 50;


    useEffect(() => {
        processImage(originalfilename);
    },[]);

    const processImage = (image) => {
        // convert possible hex to rgb
        color = color.replace('#', '');

        // get the r, g, and b values
        const r = parseInt(color.substring(0, 2), 16);
        const g = parseInt(color.substring(2, 4), 16);
        const b = parseInt(color.substring(4, 6), 16);

        color = `rgb(${r}, ${g}, ${b})`;

        // test
        console.log(color);

        // convert thumbnail to 2D array (canvas)

        // call binarizeImage with canvas
        
        // create a data structure to keep track of centroids

        // call find groups


        // turn canvas back into image, pass to BinarizedFrame component

        // set new image (state)
        // set new biggest group (state)
    }

    const binarizeImage = (image2D) => {
        // go through image
            // if pixel is in color range => turn white
            // else => turn black
    }

    
    const findGroups = (image2D) => {
        // interative search (bfs or dfs? I don't think it matters)
    }


    return (
        <div>
            <BinarizedFrame />
        </div>
    )
}