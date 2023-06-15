import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
  
  const [err,setErr] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    // const displayName = e.target[0].value
    const email = e.target[0].value
    const password = e.target[1].value
    // const file = e.target[3].files[0]
    // console.log(e.target[1].value)

  try{
    await signInWithEmailAndPassword(auth,email,password)
    navigate("/")
  }catch(err){
    setErr(true);
  }

  };
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>ChatApp</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
              
                <input type="email" placeholder='display email'/>
                <input type="password" placeholder='password' />    
                <button>Sign in</button>
                {err && <span>Somthing went wrong</span>}
            </form>
            <p>You dont have a account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

