

import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from 'styled-components'

import light from './themes/light';
import dark from './themes/dark';

import { GlobalStyle } from './styles/global';
import Routes from './routes';

import { ToogleDarkLight  } from './components/ToogleDarkLight'


export function App() {
  const [theme, setTheme] = useState(dark)

  const toogleTheme = () => {
    setTheme(theme.title == "light" ? dark : light)
  }


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
        <ToogleDarkLight toogleTheme={toogleTheme} />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}