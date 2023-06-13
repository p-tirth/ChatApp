import React from 'react'
import { Messages } from './Messages'
import Input from './Input'

export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>mona</span>
        <div className="chatIcons">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}
