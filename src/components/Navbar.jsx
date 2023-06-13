import React from 'react'
import mona from '../img/mona.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chatapp</span>
      <div className="user">
        <img className="profile"src={mona} alt="b"/>
        <span>Tirth</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar