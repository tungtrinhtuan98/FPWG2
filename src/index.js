import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HomePage from './components/HomePage'
import rootReducer from './reducers'
import PageSelectPage from './components/PageSelectPage'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <PageSelectPage />
  </Provider>,
  document.getElementById('root')
)
