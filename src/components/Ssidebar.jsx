import React from 'react'
import Navbar from './Nnavbar'
import Search from './Ssearch'
import { Chats } from './Cchats'

 const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar