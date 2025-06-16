// This component renders the binarized frame

// Parent -> VideoPreview
// children -> BinarizedFrame

import { useState, useEffect, useContext } from "react";
import BinarizedFrame from "./BinarizedFrame"
import { SettingsContext } from "@/context/SettingsContext";

export default function BinarizedFrameContainer({imgURL}){
    
    // TODO: Logic for Binarized frame
    // color
    // threshold
    // image

    // testing sample vid (baby in yellow raincoat)
    let color = "#EAC659";
    const threshold = 50;

    useEffect(() => {
        processImage(imgURL);
    }, [imgURL]);

    const processImage = (thumbnail) => {
        console.log(thumbnail);
        console.log("Image type: ", typeof thumbnail);
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
        const image = new Image();
        image.src = thumbnail;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2D');
        canvas.width = image.width;
        canvas.height = image.height;

        console.log(`Width: ${canvas.width}`);
        console.log(`Height: ${canvas.height}`);


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