import { useEffect, useState } from "react";
import getImageDataHandler from "../lib/api/image";

const useImage = (number) => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    try {
      //when number is changed -> set image data
      const setImageDataHandler = async () => {
        const imageData = await getImageDataHandler(number);
        return setImage(imageData);
      };
      setImageDataHandler();
    } catch (e) {
      //set image loading error in image state
      return setImage(e);
    }
    //when unmount -> set reoload image data
    return () => {
      setImage([]);
    };
  }, [number]);
  return image;
};

export default useImage;
