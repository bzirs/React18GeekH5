import './App.scss'
import Routes from './router'
import { Provider } from 'react-redux'
import store from './store'
const App = () => {
  return (
    <div className='app'>
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    </div>
  )
}

export default App
