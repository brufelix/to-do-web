import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Menu from './template'
import Router from './routes'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div
        className='containerCentral'
      >
        <Menu />
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App