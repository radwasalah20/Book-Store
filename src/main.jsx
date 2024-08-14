import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AllProductsProvider from './Context/AllProducts.jsx'
import { CartContextProvider } from './Context/CartContext.jsx'
import WishlistContextProvider from './Context/WishlistContext.jsx'
import AuthContextProvider from './Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthContextProvider>
  <WishlistContextProvider>
    <CartContextProvider >
      <AllProductsProvider>
        <App />
      </AllProductsProvider>
    </CartContextProvider>
  </WishlistContextProvider>
  </AuthContextProvider>

)
