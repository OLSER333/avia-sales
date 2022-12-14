import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/normalize.css'
import './assets/styles'
import App from './components/App/App'
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
