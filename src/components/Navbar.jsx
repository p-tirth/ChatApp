import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import mona from '../img/mona.jpg'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const currentUser = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Chatapp</span>
      <div className="user">
        <img className="profile" src={currentUser.currentUser.photoURL} alt="b"/>
        <span className='name'>{currentUser.currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar