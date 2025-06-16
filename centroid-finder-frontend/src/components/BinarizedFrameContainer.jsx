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
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Convert target hex color to RGB
  const hex = hexColor.replace("#", "");
  const targetR = parseInt(hex.substring(0, 2), 16);
  const targetG = parseInt(hex.substring(2, 4), 16);
  const targetB = parseInt(hex.substring(4, 6), 16);

  // Step 1: Binarize (white if in range, else black)
  const binary = new Uint8Array(canvas.width * canvas.height); // 0 or 1
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const distance = Math.sqrt(
      (r - targetR) ** 2 + (g - targetG) ** 2 + (b - targetB) ** 2
    );
    const isWhite = distance < threshold ? 1 : 0;
    binary[i / 4] = isWhite;
    const value = isWhite ? 255 : 0;
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
    data[i + 3] = 255;
  }

  // Step 2: Find largest connected region with BFS
  const visited = new Uint8Array(binary.length);
  let maxCount = 0;
  let centroidX = 0;
  let centroidY = 0;

  const w = canvas.width;
  const h = canvas.height;

  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      if (binary[idx] === 1 && !visited[idx]) {
        // New region: start BFS
        const queue = [[x, y]];
        visited[idx] = 1;

        let count = 0;
        let sumX = 0;
        let sumY = 0;

        while (queue.length) {
          const [cx, cy] = queue.pop();
          const cidx = cy * w + cx;
          count++;
          sumX += cx;
          sumY += cy;

          for (const [dx, dy] of directions) {
            const nx = cx + dx;
            const ny = cy + dy;
            if (
              nx >= 0 && nx < w && ny >= 0 && ny < h &&
              binary[ny * w + nx] === 1 && !visited[ny * w + nx]
            ) {
              visited[ny * w + nx] = 1;
              queue.push([nx, ny]);
            }
          }
        }

        if (count > maxCount) {
          maxCount = count;
          centroidX = sumX / count;
          centroidY = sumY / count;
        }
      }
    }
  }

  // Step 3: Put updated binarized image back
  ctx.putImageData(imageData, 0, 0);

  // Step 4: Draw centroid as orange dot
if (maxCount > 0) {
  // Small filled center dot
  ctx.beginPath();
  ctx.arc(centroidX, centroidY, 8, 0, 2 * Math.PI); // small radius
  ctx.fillStyle = "#ff8900"; // orange fill
  ctx.fill();

  // Larger hollow ring around it
  ctx.beginPath();
  ctx.arc(centroidX, centroidY, 20, 0, 2 * Math.PI); // bigger radius
  ctx.lineWidth = 4; // ring thickness
  ctx.strokeStyle = "#ff8900"; // orange stroke
  ctx.stroke();
}

  // Step 5: Return data URL
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