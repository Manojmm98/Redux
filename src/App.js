import  './App.css';
import {Provider} from 'react-redux'
import store from './ReduxFile/Store'
import BallContainer from './BallContainer'
import BatContainer from './BatContainer'
import UserContainer from './UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <BallContainer/>
        <BatContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  )
}

export default App

