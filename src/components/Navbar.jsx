import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import mona from '../img/mona.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chatapp</span>
      <div className="user">
        <img className="profile"src={mona} alt="b"/>
        <span>Tirth</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar