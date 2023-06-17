import React from 'react'
import { Chat } from '../components/Chat'
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
