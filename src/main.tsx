import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { YoutuDownApp } from './YoutuDownApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <YoutuDownApp/>
  
  </StrictMode>,
)
