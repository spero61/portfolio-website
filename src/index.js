import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';

// https://chakra-ui.com/docs/styled-system/css-variables
const theme = extendTheme({
  fonts: {
    heading: 'Pacifico',
    body: 'Noto Sans JP',
    navText: 'Roboto Mono',
  },
  colors: {
    bgRoot: '#292C3D',
    // bgNavbar: '#34384E',
    bgNavbar: 'RGB(41, 44, 61, 0.9)',
    bgBox: '#34384E',
    bgButton: '#E2C3B2',
    bgAlt: '#2E3641',
    text00: '#C1DBE3',
    text01: '#CDE0BE',
    text02: '#CC4E00',
    text03: '#E2C3B2',
    text04: '#E9F3B7',
    text05: '#D4F5F5',
    text06: '#89A4BB',
    text07: '#828297',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
