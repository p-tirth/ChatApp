import React from 'react'
import Navbar from './Nnavbar'
import Search from './Search'
import { Chats } from './chats'

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