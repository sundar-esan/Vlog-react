import React, { useState } from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';



const Header = () => {
          
         const dispatch = useDispatch();
         const isLoggedIn = useSelector(state => state.isLoggedIn);

    const [value, setvalue] = useState();
  return (
  <AppBar 
  position="sticky"
  sx={{ background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)" }}>
     <Toolbar>
        <Typography variant='h4'>VlogsApp</Typography>
      { isLoggedIn &&  <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
         <Tabs textColor='inerit'  value={value} onChange={(e, val)=>setvalue(val)}>
            <Tab  LinkComponent={Link} to='/vlogs' label="All Blogs" />
            <Tab LinkComponent={Link} to='/myVlogs' label="My Blogs" />
            <Tab LinkComponent={Link} to='/vlogs/add' label="Add Vlog" />
         </Tabs>

        </Box>}
        <Box display="flex" marginLeft="auto">
          { !isLoggedIn && <> <Button LinkComponent={Link} to='/auth'
             variant='contained' 
             sx={{ margin:"1", borderRadius:10 }} >Log in</Button>  

          <Button LinkComponent={Link} to='/auth'
             variant='contained' 
             sx={{ margin:"1", borderRadius:10}} >Sign UP</Button> </>}

         { isLoggedIn &&  <Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to='/auth' 
            variant='contained' 
            sx={{ margin:"1", borderRadius:10}} >Log out</Button>}
        </Box>

     </Toolbar>
  </AppBar>
  )
}

export default Header



