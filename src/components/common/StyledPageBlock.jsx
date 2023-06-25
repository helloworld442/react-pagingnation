import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageBox = styled.div`
  width: 50px;
  height: 50px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  font-size: 1.6rem;
  border: 5px solid #333;
`;
const StyledPageBox = ({ num }) => {
  const pagingQueryString = "/paging/" + num + "";
  return (
    <Link to={pagingQueryString}>
      <PageBox>{num}</PageBox>
    </Link>
  );
};
export default StyledPageBox;
