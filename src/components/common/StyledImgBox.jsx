import React from "react";
import styled from "styled-components";
const ImgBox = styled.div`
  width: 300px;
  height: 300px;
  padding: 0;
  margin: 15px;
  display: inline-block;
  outline: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid #aaa;
    border-radius: 15px;
  }
`;

const StyledImgBox = ({ url }) => {
  return (
    <ImgBox>
      <img src={url} />
    </ImgBox>
  );
};

export default StyledImgBox;
