import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>ChatApp</span>
            <span className='title'>Login</span>
            <form>
              
                <input type="email" placeholder='display email'/>
                <input type="password" placeholder='password' />    
                <button>Sign in</button>
            </form>
            <p>You dont have a account? Register</p>
        </div>
    </div>
  )
}

