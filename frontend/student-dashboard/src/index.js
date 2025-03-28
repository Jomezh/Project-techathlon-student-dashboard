import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// No need to import App.css here if imported in App.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)