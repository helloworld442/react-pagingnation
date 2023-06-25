import React from "react";
import styled from "styled-components";
import StyledPageBox from "../common/StyledPageBlock";
const PageBlock = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3b4148;
  padding: 0;
`;

const ImgPageBlock = () => {
  const totalImageNumber = 20;
  const pageNumData = Array.from(
    { length: Math.ceil(totalImageNumber / 4) },
    (v, i) => i + 1
  );
  return (
    <PageBlock>
      {pageNumData.map((num) => (
        <StyledPageBox num={num} key={num} />
      ))}
    </PageBlock>
  );
};
export default ImgPageBlock;
