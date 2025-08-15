import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // ← shadcn/uiのベース設定
// import './App.css'    
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)