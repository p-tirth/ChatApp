import { useState } from 'react'
import './style.scss'
import Home from './pages/Home'
import { Register } from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Register/>
    </div>
  )
}

export default App
