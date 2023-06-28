import React, { useContext } from 'react'
import { Messages } from './Mmessages'
import Input from './Iinput'
import { ChatContext } from '../context/ChatContext'

 const Chat = () => {

  const {data} = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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

export default Chat 