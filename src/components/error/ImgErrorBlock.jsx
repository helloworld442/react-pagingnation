import React from "react";
import styled from "styled-components";

const ImgErrorBlock = styled.div`
  width: 100%;
  height: 90%;
  background: #3b4148;
`;

const ImgErrorBox = styled.div`
  widht: 300px;
  height: 300px;
  background: orange;
  border-radius: 50%;
`;

const ImgErrorConponent = () => (
  <ImgErrorBlock>
    <ImgErrorBox />
  </ImgErrorBlock>
);

export default ImgErrorConponent;
