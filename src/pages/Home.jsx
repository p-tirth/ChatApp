import React from 'react'
import { Login } from './Login'
import { Chat } from '../components/Chat'
import { Chats } from '../components/Chats'
import Input from '../components/Input'
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { Sidebar } from '../components/sidebar'


export default function Home() {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
