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
    bgNavbar: '#6A6F8A45',
    bgBox: '#344154',
    bgButton: '#E2C3B2',
    bgAlt01: '#2E3641',
    bgAlt02: '#093148',
    bgAlt03: '#35393C', // Onyx
    text00: '#C1DBE3',
    text01: '#CDE0BE',
    text02: '#E2D7FF',
    text03: '#EDCDBB',
    text04: '#E9F3B7',
    text05: '#D9FAFA',
    text06: '#93B0C9',
    text07: '#9595AD',
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
