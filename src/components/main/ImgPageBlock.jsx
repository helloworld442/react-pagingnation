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
  //set totalImageNumber and onePagingNumber in .env
  const totalImageNumber = import.meta.env.VITE_CAT_NUM;
  const onePagingNumber = import.meta.env.VITE_CAT_ONE_PAGE_NUM;
  const pageNumData = Array.from(
    {
      length: Math.ceil(totalImageNumber / onePagingNumber),
    },
    (_, i) => i + 1
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
