import React from "react";
import styled from "styled-components";
import StyledImgBox from "../common/StyledImgBox";
const ImgItemBlock = styled.div`
  width: 100%;
  height: 90%;
  background: #3b4148;
`;

const ImgListItemBlock = ({ image }) => {
  return (
    <ImgItemBlock>
      {image.map((val) => (
        <StyledImgBox key={val.id} url={val.url} />
      ))}
    </ImgItemBlock>
  );
};
export default ImgListItemBlock;
