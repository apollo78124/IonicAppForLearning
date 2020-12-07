import { useState} from "react";
export function ImageSwap() {
    var imageList = ["fox.jpg", "alex.jpg", ];
    var [currentPosition, setCurrentPosition] = useState(0);
    var [imageName, setImageName] = useState("fox.jpg");
    console.log("use State");
    const ImageRight = async () => {
        setImageName("alex.jpg");
        console.log("image left");
    };
  
    return {
        imageName,
        ImageRight
    };
  }