import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background : #363b41;
    }

    #root {
        width: 100%;
        height: 100%;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
