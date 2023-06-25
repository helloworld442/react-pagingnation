import React from "react";
import styled from "styled-components";

const ImgHeaderBox = styled.div`
    padding : 15px;
    margin : 15px;    
    text-align: left;
    color #ccc;
    font-weight: 500;
    font-size:2rem;
    content : "hello world";
    border-bottom: 5px solid #333;
    
`;

const ImgHeaderBlock = () => <ImgHeaderBox>This is Cat Life</ImgHeaderBox>;

export default ImgHeaderBlock;
