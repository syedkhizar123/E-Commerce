import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Contexts/CartContext.jsx'
import { ProductsProvider } from './Contexts/ProductsContext.jsx'
import { AuthProvider } from './Contexts/AuthContext.jsx'
import { OrderProvider } from './Contexts/OrderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>,
)
