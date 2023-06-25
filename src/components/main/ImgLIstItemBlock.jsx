import React from "react";
import styled from "styled-components";
import StyledImgBox from "../common/StyledImgBox";
import useImage from "../../hooks/useImage";
import { useParams } from "react-router";
const ImgItemBlock = styled.div`
  width: 100%;
  height: 90%;
  background: #3b4148;
`;

const ImgListItemBlock = () => {
  let image = useImage();
  let params = parseInt(useParams().pagingId);
  params = params ? params : 1;
  image = image.slice((params - 1) * 4, params * 4);
  return (
    <ImgItemBlock>
      {image && image.map((val) => <StyledImgBox key={val.id} url={val.url} />)}
    </ImgItemBlock>
  );
};
export default ImgListItemBlock;
