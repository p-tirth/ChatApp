import React from 'react'
import  Chat  from '../components/Cchat'
import  Sidebar  from '../components/Ssidebar'


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
