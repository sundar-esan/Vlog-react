import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../global';

const Vlog = ({title,description, imageURL, userName, isUser, id}) => {
const navigate = useNavigate();

const handleEdit = (e) => {
    navigate(`/myVlogs/${id}`)
  };

  console.log('hello',id) 

  
  const deleteRequest = async () => {
axios.delete(`${API}/api/vlog/${id}`).catch(err=>console.log(err));
console.log('hello',id)

  }

  const handleDelete = () => {
deleteRequest().then((data)=>console.log(data))
.then(()=>navigate("/"))
.then(()=>navigate("/vlogs"));
  };

    console.log(title, isUser)
  return (
    <div>
       <Card sx={{ width:"40%",
      margin:"auto",
      mt:2,
      padding:2,
      boxShadow:"5px 5px 10px #ccc",
      ":hover:":{
        boxShadow:"10px 10px 20px #ccc"
      },
      }}>

        {isUser && (
            <Box display= "flex">
                <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><EditIcon color='secondary' /></IconButton>
                <IconButton onClick={handleDelete} ><DeleteIcon color="error" /></IconButton>
            </Box>
        )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
           {userName}
          </Avatar>
        }
       
        title={title}
       
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      
      <CardContent>
      <hr />
      <br />
        <Typography variant="body2" color="text.secondary">
            <b>{userName}</b> {":"}
         {description}
        </Typography>
      </CardContent>
     
    </Card>
    </div>
  )
}

export default Vlog
