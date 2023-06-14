import { useState } from 'react'
import './style.scss'
import Home from './pages/Home'
import { Register } from './pages/Register'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Login } from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
