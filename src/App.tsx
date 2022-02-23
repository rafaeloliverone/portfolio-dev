

import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from 'styled-components'
import {initReactI18next } from "react-i18next";
import i18n from "i18next";

import light from './themes/light';
import dark from './themes/dark';

import common_en from "./translations/en/common.json";
import common_pt from "./translations/pt/common.json";

import { GlobalStyle } from './styles/global';
import Routes from './routes';
import { ToogleDarkLight } from './components/ToogleDarkLight'


export function App() {
  const [jsonPt, setJsonPt] = useState(common_pt);
  const [jsonEn, setJsonEn] = useState(common_en);

  const changeIdioma = (ptJson: any, enJson: any) => {
    setJsonPt(Object.assign(jsonPt, ptJson))
    setJsonEn(Object.assign(jsonEn, enJson))
  }


  i18n
    .use(initReactI18next)
    .init({
    interpolation: { escapeValue: false },
    lng: 'pt',
      resources: {
        en: {
          common: jsonEn
        },
        pt: {
          common: jsonPt
        },
      },
  });

  const [theme, setTheme] = useState(dark)

  const toogleTheme = () => {
    setTheme(theme.title == "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes changeIdioma={changeIdioma} />
        <ToogleDarkLight toogleTheme={toogleTheme} />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
