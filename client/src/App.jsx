import './App.css'
import Home from './components/Home'
import { Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
