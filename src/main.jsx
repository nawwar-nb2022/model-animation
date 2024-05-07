import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CharacterAnimationProvider } from './context/CharacterAnimation.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterAnimationProvider>
      <App/>
    </CharacterAnimationProvider>
  </React.StrictMode>,
)
