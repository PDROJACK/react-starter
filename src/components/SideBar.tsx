import { Box, Button, Divider, Drawer, List } from '@mui/material'
import React from 'react'
import { selectUser } from '../features/userinfo/userSlice';
import { useAppSelector } from '../app/hooks';
import InstagramLogin from './InstagramAuth';
import Logo from "../logo.png"

const drawerWidth = 240;

function SideBar() {

  const user = useAppSelector(selectUser);

  const AddSocialMedia = () => {
    // 
  }

  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Box sx={{  backgroundColor: "#D6AD60", display:"flex", alignContent: "center", justifyContent:"center" }}>
        <img src={Logo} width={50} height={50} style={{margin:4}} alt="logo" />
    </Box>

    <Divider />
    <List>
        {/* Add social media additions here */}
        {user.integrations.map( u => {
            return <Button variant='outlined'>{u.name}</Button>
        })}
       <InstagramLogin />
    </List>
    <Divider />
  </Drawer>
  )
}

export default SideBar