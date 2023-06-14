import { useContext, useState } from 'react'
import './style.scss'
import Home from './pages/Home'
import { Register } from './pages/Register'
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import { Login } from './pages/Login';
import { AuthContext } from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0)
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  };
  console.log(currentUser)
  return (
    <BrowserRouter>

      <Routes path="/">
        <Route index element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        }
      />
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
