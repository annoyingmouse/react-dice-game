import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import game from './reducers'

const store = createStore(game)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

render()