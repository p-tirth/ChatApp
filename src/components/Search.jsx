import React from 'react'
import mona from '../img/mona.jpg'
const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search people'/>
        <div className="userChat">
          <img src={mona} alt="" />
          <div className="userChatInfo">
            <span>mona</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search