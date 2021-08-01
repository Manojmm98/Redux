import React from 'react'
import {Provider} from 'react-redux'
import store from './ReduxFile/Store'
import BallContainer from './BallContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BallContainer/>
      </div>
    </Provider>
  )
}

export default App

