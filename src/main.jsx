import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import theme from './components/themes/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Staff from './components/Staff';
import Hero from './components/Hero.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}>
        </Route>
        <Route path="/docs" element={<App />}>
        </Route>
        <Route path="/staff" element={<Staff />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
