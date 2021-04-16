import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './styles.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <div className='App'>
      <h1>react-instances</h1>
      <App />
    </div>
  </StrictMode>,
  rootElement
)
