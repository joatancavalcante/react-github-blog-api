import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        webkit-font-smoothing: antialiased;
    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']}; 
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, 'sans-serif';
    }

`;