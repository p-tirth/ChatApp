import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth' 
import {auth,storage} from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


export const Register = () => {

  const [err,setErr] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    console.log(e.target[0].value)

  try{

    const res = await createUserWithEmailAndPassword(auth, email, password)
  }catch(err){
    setErr(true);
  }

  }
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>ChatApp</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='display email'/>
                <input type="password" placeholder='password' />
                <input type="file" />
                <button>Sign up</button>
                {err && <span>Somthing went wrong</span>}
            </form>
            <p>Already have a account? Login</p>
        </div>
    </div>
  )
}
