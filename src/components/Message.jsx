import React from 'react'
import mona from '../img/mona.jpg'

const Message = () => {
  return (
    <div className='message owner'>
    <div className="messageInfo">
      <img src={mona} alt="" />
      <span>just now</span>
    </div>
    <div className="messsageContent">
      <p>hello</p>
      <img src={mona} alt="" />
    </div>
    </div>
  )
}

export default Message