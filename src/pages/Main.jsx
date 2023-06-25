import React from "react";
import ImgListBlock from "../components/main/ImgListBlock";
import ImgListItemBlock from "../components/main/ImgLIstItemBlock";
import ImgPageBlock from "../components/main/ImgPageBlock";
import ImgHeaderBlock from "../components/main/ImgHeaderBlock";
const MainPage = () => {
  return (
    <ImgListBlock>
      <ImgHeaderBlock />
      <ImgListItemBlock />
      <ImgPageBlock />
    </ImgListBlock>
  );
};
export default MainPage;
