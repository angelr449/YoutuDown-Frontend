import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { YoutuDownApp } from './YoutuDownApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <YoutuDownApp/>
  
  </StrictMode>,
)
