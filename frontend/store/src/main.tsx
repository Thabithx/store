import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/Shopcontext.tsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <ToastContainer position="top-right" autoClose={3000} aria-label="Notification container"/>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
