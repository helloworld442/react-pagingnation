import React from "react";
import ImgListItemBlock from "../components/main/ImgLIstItemBlock";
import useImage from "../hooks/useImage";
import { useParams } from "react-router-dom";
import ImgErrorConponent from "../components/error/ImgErrorBlock";
const ImgContainer = () => {
  let image = useImage();
  let { pagingId } = useParams();
  pagingId = parseInt(pagingId);
  pagingId = pagingId ? pagingId : 1;
  image = image.slice((pagingId - 1) * 4, pagingId * 4);

  if (image.length === 0) {
    return <ImgErrorConponent />;
  }
  return <ImgListItemBlock image={image} />;
};

export default ImgContainer;
