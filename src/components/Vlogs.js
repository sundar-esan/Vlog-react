import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Vlog from './Vlog';
import { API } from '../global';

const Vlogs = () => {
          
  const [vlogs, setVlogs] = useState();

    const sendRequest = async () => {
      const res = await axios.get(`${API}/api/vlog`).catch(err =>console.log(err));
      const data = await res.data;
      return data;
    }
  useEffect(() => {
    sendRequest().then(data=>setVlogs(data.vlogs));
  },[]);
  console.log(vlogs);
  return (
    <>
    <div>
{ vlogs && vlogs.map((vlog, index ) => (
  <Vlog 
     id={vlog._id}
     isUser={localStorage.getItem('userId') === vlog.user._id}
     title={vlog.title}
     description={vlog.description}
     imageURL={vlog.image}
     userName={vlog.user.name}
  />
))    }
    </div>
    </>
  )
}

export default Vlogs
