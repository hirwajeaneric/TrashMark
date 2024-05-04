import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider context={helmetContext}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </HelmetProvider>
)
