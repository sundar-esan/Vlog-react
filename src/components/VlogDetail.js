import axios from 'axios';
import React, { useEffect, useState } from'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Box,InputLabel, TextField, Typography,Button } from '@mui/material'
import { API } from '../global';

const labelStyles={mb:1,mt:2,fontSize:"24px",fontWeight:"bold"}

const VlogDetail = ()  => {

  const navigate = useNavigate()

const[vlog,setVlog] = useState()

  const id=useParams().id;
  console.log(id);
  const[inputs,setInputs]=useState({});

  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios.get(`${API}/api/vlog/${id}`).catch(err=>console.log(err))
    const data = await res.data;
    return data;
  }
  
  useEffect(() => {
    fetchDetails().then(data=>{
      setVlog(data.vlog)
    setInputs({title: data.vlog.title,
      description: data.vlog.description,
      imageURL: data.vlog.image })
    });
  },[id]);

  const sendRequest = async() =>  {
const res =  await axios.put(`${API}/api/vlog/update/${id}`,{
title:inputs.title,
description:inputs.description
}).catch(err=>console.log(err));

const data = await res.data;
return data
  }
  console.log(vlog);

  const handleSubmit = (e) => {
e.preventDefault()
console.log(inputs);
sendRequest().then((data)=>console.log(data)).then(()=>navigate("/myVlogs/"));
  }

  return(
    <div> {inputs && <form onSubmit={handleSubmit}>
    <Box 
    border={3}
    borderColor="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,24,1) 35%, rgba(0,212,255,1) 100%)" 
    borderRadius={10}
    boxShadow="10px 10px 20px #ccc"
    padding={3}
    margin={"auto"}
    marginTop={3}
    display='flex'
    flexDirection={'column'}
    width={"80%"}>

      <Typography fontWeight = {'bold'} padding={3} color="grey" variant="h2" textAlign={'center'}>Post Your Blog</Typography>

      <InputLabel sx={labelStyles}>Title</InputLabel>

      <TextField name="title"onChange={handleChange}value={inputs.title}margin='auto'variant="outlined"/>

      <InputLabel sx={labelStyles}>Description</InputLabel>

      <TextField name="description"onChange={handleChange}value={inputs.description}margin='auto'variant="outlined"/>
      
      <Button sx={{mt:2,borderRadius:4}} variant="contained"color="success"type="submit">Submit</Button>
    </Box>
  </form>}</div>
  )
}
export default VlogDetail
