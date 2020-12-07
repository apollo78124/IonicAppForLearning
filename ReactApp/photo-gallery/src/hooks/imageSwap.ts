import { useState} from "react";
export function ImageSwap() {
    var imageList = ["fox.jpg", "alex.jpg", "8b52.jpg", "image_02af.jpg", "image_13a.jpg", "image_43e.jpg", "image_49aba.jpg", "image_db0cc.jpg"];
    var [currentPosition, setCurrentPosition] = useState(0);
    var [imageName, setImageName] = useState(imageList[currentPosition]);
    console.log("use State");
    const ImageLeft = async () => {
        if (currentPosition < 1) {
            setCurrentPosition(imageList.length -1 );
        } else {
        setCurrentPosition(--currentPosition);
        }
        setImageName(imageList[currentPosition]);
    };

    const ImageRight = async () => {
        if (currentPosition > imageList.length - 2) {
            setCurrentPosition(0);
        } else {
            setCurrentPosition(++currentPosition);
        }
        
        setImageName(imageList[currentPosition]);
    };
  
    return {
        imageName,
        ImageRight, 
        ImageLeft
    };
  }