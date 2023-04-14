import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LangProvider from './components/Providers/LangProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
)
