import React, { useContext, useState } from 'react'
import mona from '../img/mona.jpg'
import {AuthContext} from '../context/AuthContext'
import { collection, query, doc, getDoc, getDocs, setDoc, where, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const Search = () => {
  const [username,setUsername] = useState("")
  const [user,setUser] = useState(null)
  const [err,setErr] = useState(false)

  const {currentUser} = useContext(AuthContext) 

  const handleSearch = async () =>{
    const q = query(collection(db,"users"),where("displayName","==",username));
    try{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach( (doc) => {setUser(doc.data())} );
    }catch(err){
      setErr(true);
      console.log(err)
    }
  }

  const handleKey = e=>{
    e.keyCode === 13 && handleSearch();
  }
  const handleSelect = async () =>{
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
    try{
      // console.log(combinedId)
      const res = await getDoc(doc(db,"chats",combinedId))
      if(!res.exists()){
        console.log("?")
        await setDoc(doc(db,"chats",combinedId),{messages:[]});
        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid:user.uid,
            displayName: user.displayName,
            photoURL:user.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })
        await updateDoc(doc(db,"userChats",user.uid),{
          [combinedId+".userInfo"]:{
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL:currentUser.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })
      }
    }catch(err){
      console.log(err)
    }
    setUser(null)
    setUsername("")
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search people' value={username} onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}/>
        {err && <span>User not found!</span>}
        {user && <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>}
      </div>
    </div>
  )
  }

export default Search