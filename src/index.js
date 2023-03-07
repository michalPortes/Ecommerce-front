import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from './context/index'

const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  rootElement
)
