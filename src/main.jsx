import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import theme from './components/themes/index.js';
import FooterBar from './components/shared/FooterBar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
      <App />
  </ChakraProvider>
)
