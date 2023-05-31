import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        background-color:  rgba(236, 240, 241,1.0);
        font-family:serif;
        text-decoration: none;
    };
    a{
        color: black;
       text-decoration: none;
    }

`;

export default GlobalStyle;
