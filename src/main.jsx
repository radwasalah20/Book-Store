import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AllProductsProvider from './Context/AllProducts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(


    <AllProductsProvider>
      <App />
    </AllProductsProvider>

)
