import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MenuBar from './MenuBar.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuBar/>
    <App />
  </StrictMode>,
)
