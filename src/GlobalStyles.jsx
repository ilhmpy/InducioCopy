import { createGlobalStyle } from "styled-components";
import AdobeStock from "./imgs/AdobeStock.webp";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        height: 100%;
        font-family: 'Raleway', sans-serif;
        background-image: url(${AdobeStock});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    h1, h2, h3 {
        padding: 0;
        margin: 0;
        line-height: 0;
    }

    button {
        outline: none;
        background: 0;
        border: 0;
        cursor: pointer;
    }

    input {
        outline: none;
        border: 0;
        background: 0;
        padding: 15px 15px;
    }

    #root {
        height: 100%;
    }

    a {
        cursor: pointer;
    }

    textarea {
        outline: none; 
        border: none; 
        resize: none;
    }
`;