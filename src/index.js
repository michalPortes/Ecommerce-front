import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from './context/index'
import { UserProvider } from './context/user.context'
const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  rootElement
)
