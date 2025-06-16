// This component renders the binarized frame

// Parent -> VideoPreview
// children -> BinarizedFrame

import { useState, useEffect, useContext } from "react";
import BinarizedFrame from "./BinarizedFrame"
import { SettingsContext } from "@/context/SettingsContext";

export default function BinarizedFrameContainer(){
    // get thumbnail, color, and threshold from the Settings Context
    const { thumbnail, color, threshold } = useContext(SettingsContext);

    // set state to track binarized image, default to null
    const [binarizedImage, setBinarizedImage] = useState(null);

    // when thumbnail, color, threshold update, update binarized image
    useEffect(() => {
    const process = async () => {
        if (thumbnail && color && threshold != null) {
            try {
                const dataUrl = await binarizeImage(thumbnail, color, threshold);
                setBinarizedImage(dataUrl);
            } catch (error) {
            console.error("Error binarizing image:", error);
            }
        }
    };
    process();
    }, [thumbnail, color, threshold]);

    function loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous"; // optional but often useful
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = url;
    });
    }

  const binarizeImage = async (imageUrl, hexColor, threshold) => {
  const img = await loadImage(imageUrl);
  console.log("Image loaded:", img.width, img.height);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  const hex = hexColor.replace("#", "");
  const targetR = parseInt(hex.substring(0, 2), 16);
  const targetG = parseInt(hex.substring(2, 4), 16);
  const targetB = parseInt(hex.substring(4, 6), 16);

  console.log("Target color RGB:", targetR, targetG, targetB);
  console.log("Threshold:", threshold);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const distance = Math.sqrt(
      (r - targetR) ** 2 + (g - targetG) ** 2 + (b - targetB) ** 2
    );
    const value = distance < threshold ? 255 : 0;
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
    data[i + 3] = 255; // **Make pixel fully opaque**
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
};

    
    return (
        <div>
        <BinarizedFrame binarizedSrc={binarizedImage} />
        </div>
    );
    }
    // TODO: Logic for Binarized frame

    // // testing sample vid (baby in yellow raincoat)
    // let color = "#EAC659";
    // const threshold = 50;

//     useEffect(() => {
//         processImage(thumbnail);
//     }, []);

//     const processImage = (thumbnail) => {
//         console.log(thumbnail);
//         console.log("Image type: ", typeof thumbnail);
//         // convert possible hex to rgb
//         color = color.replace('#', '');

//         // get the r, g, and b values
//         const r = parseInt(color.substring(0, 2), 16);
//         const g = parseInt(color.substring(2, 4), 16);
//         const b = parseInt(color.substring(4, 6), 16);

//         color = `rgb(${r}, ${g}, ${b})`;

//         // test
//         console.log(color);

//         // convert thumbnail to 2D array (canvas)
//         const image = new Image();
//         image.src = thumbnail;

//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2D');
//         canvas.width = image.width;
//         canvas.height = image.height;

//         console.log(`Width: ${canvas.width}`);
//         console.log(`Height: ${canvas.height}`);


//         // call binarizeImage with canvas
        
//         // create a data structure to keep track of centroids

//         // call find groups


//         // turn canvas back into image, pass to BinarizedFrame component

//         // set new image (state)
//         // set new biggest group (state)
//     }

//     const binarizeImage = (image2D) => {
//         // go through image
//             // if pixel is in color range => turn white
//             // else => turn black
//     }

    
//     const findGroups = (image2D) => {
//         // interative search (bfs or dfs? I don't think it matters)
//     }


//     return (
//         <div>
//             <BinarizedFrame />
//         </div>
//     )
// }