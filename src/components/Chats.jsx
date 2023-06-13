import React from 'react'
import mona from '../img/mona.jpg'

export const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
          <img src={mona} alt="" />
          <div className="userChatInfo">
            <span>mona</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="userChat">
          <img src={mona} alt="" />
          <div className="userChatInfo">
            <span>mona</span>
            <p>hi again</p>
          </div>
        </div>
    </div>
  )
}
