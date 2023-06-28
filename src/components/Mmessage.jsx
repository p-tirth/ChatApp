import React, { useContext } from 'react'
import mona from '../img/mona.jpg'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  // const ref = useRef();

  // console.log(msg)
  return (
    // <div className='message owner'>
    // <div className="messageInfo">
    //   <img src={} alt="pic" />
    //   <span>just now</span>
    // </div>
    // <div className="messsageContent">
    //   <p>hello</p>
    //   <img src={mona} alt="" />
    // </div>
    // </div>
    <div
    // ref={ref}
    className={`message ${message.senderId === currentUser.uid && "owner"}`}
  >
    <div className="messageInfo">
      <img
        src={
          message.senderId === currentUser.uid
            ? currentUser.photoURL
            : data.user.photoURL
        }
        alt=""
      />
      <span>just now</span>
    </div>
    <div className="messageContent">
      <p>{message.text}</p>
      {message.img && <img src={message.img} alt="" />}
    </div>
  </div>
);
  
}

export default Message