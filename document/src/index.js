import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './pages/App'
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router hashType='noslash'>
    <App />
  </Router>,
  document.getElementById('root')
)
