import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import enJSON from '../src/locale/en/global.json';
import esJSON from "../src/locale/es/global.json";

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en", 
  resources: {
    en: { global:enJSON },
    es: { global:esJSON }
  }
  
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
)

