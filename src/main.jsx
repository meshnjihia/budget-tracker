import React from 'react'
import ReactDOM from 'react-dom/client'
import { BudgetProvider } from './context/BudgetContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>,
)
