import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './Contexts/ProductsContext';
import { OrdersProvider } from './Contexts/OrdersContext.jsx';
import { LoginProvider } from './Contexts/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <ProductsProvider>
        <OrdersProvider>
          <App />
        </OrdersProvider>
      </ProductsProvider>
    </LoginProvider>
  </StrictMode>,
)
