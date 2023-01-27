import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Vlog from './Vlog';
import { API } from '../global';

const UserVlogs = () => {

 const [user, setUser] =  useState();
const id = localStorage.getItem("userId");

const sendRequest = async () => {
  const res = await axios.get(`${API}/api/vlog/user/${id}`).catch(err=>console.log(err))
  const data = await res.data;
  return data
}
 
useEffect(() => {
           sendRequest().then((data)=> setUser(data.user))
}, [])
 
console.log(user);
  return (
    <div>
      {" "}
       { user && user.vlogs && user.vlogs.map((vlog, index ) => (
  <Vlog
     id={vlog._id}
     key={index}
     isUser={true}
     title={vlog.title}
     description={vlog.description}
     imageURL={vlog.image}
     userName={user.name}
  />
))    }
    </div>
  )
}

export default UserVlogs
