import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WishlistProvider } from './context/wislistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </React.StrictMode>,
)
