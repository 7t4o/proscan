import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)

if ("serviceWorker" in navigator) {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  navigator.serviceWorker.register(`${baseUrl}sw.js`);
}
