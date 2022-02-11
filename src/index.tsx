import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import { App } from './App';
import common_en from "./translations/en/common.json";
import common_pt from "./translations/pt/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pt',
    resources: {
      en: {
        common: common_en
      },
      pt: {
        common: common_pt
      },
    },
});


ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App/>
  </I18nextProvider>,
  document.getElementById('root')
);