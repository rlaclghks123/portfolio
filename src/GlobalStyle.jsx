import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        overflow: hidden;
        text-decoration: none;
    };
    a{
        color: black;
       text-decoration: none;
    }

`;

export default GlobalStyle;
