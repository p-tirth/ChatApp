import React from 'react'
import mona from '../img/mona.jpg'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type somthing ..'/>
      <div className="send">
        <img src={mona} alt="attach" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={mona} alt="img" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input