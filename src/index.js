import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Link as RouterLink } from "react-router-dom";

const customTheme = extendTheme({
  components: {
    Link: {
      variants: {
        link: {
          _hover: {
            textDecoration: "underline", // Change the underline behavior on hover
            color: "green" // Change the color of the text on hover
          }
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
