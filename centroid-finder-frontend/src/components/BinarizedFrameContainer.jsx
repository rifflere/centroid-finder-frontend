// This component renders the binarized frame

// Parent -> VideoPreview
// children -> BinarizedFrame

import BinarizedFrame from "./BinarizedFrame"

export default function BinarizedFrameContainer({originalfilename}){
    // TODO: Logic for Binarized frame
    // color
    // threshold
    // image



    const processImage = (image) => {
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