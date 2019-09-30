import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Pacifico|Raleway:300,700&display=swap');
    *, *::before, *::after{
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
