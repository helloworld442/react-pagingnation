import { useEffect, useState } from "react";
import getImageDataHandler from "../lib/api/image";

const useImage = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const setImageDataHandler = async () => {
      const imageData = await getImageDataHandler();
      return setImage(imageData);
    };

    setImageDataHandler();
  }, []);

  return image;
};

export default useImage;
