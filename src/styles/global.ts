import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #c3c3c3;
    --grey: #c3c3c3;
    --green: #f8f8f8;
    --greyNew: #d4d4d4;
    
    --primary: #2a2a2a;
    --secondary: #575757;
    --white: #fff;
    --purple: #8D8EEB;
  }   

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;