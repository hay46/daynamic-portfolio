import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './contaxt/AuthContaxt.jsx'; 
import PortfolioProvider from './contaxt/PortfolioContaxt.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PortfolioProvider>
           <App />
      </PortfolioProvider>
    </AuthProvider>
  </StrictMode>
);