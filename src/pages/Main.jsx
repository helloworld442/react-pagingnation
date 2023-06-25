import React from "react";
import ImgListBlock from "../components/main/ImgListBlock";
import ImgPageBlock from "../components/main/ImgPageBlock";
import ImgHeaderBlock from "../components/main/ImgHeaderBlock";
import ImgContainer from "../contaniners/ImgContainer";
const MainPage = () => {
  return (
    <ImgListBlock>
      <ImgHeaderBlock />
      <ImgContainer />
      <ImgPageBlock />
    </ImgListBlock>
  );
};
export default MainPage;
